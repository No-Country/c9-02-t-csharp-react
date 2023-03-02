import { Activity, ServicesList } from '../operations/components';
import { Container, Paper, Title } from '../shared/styles';
import { getRewardsList, getServicesList, getTransactionHistory } from '../APIS/getRequest';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";

import { Button } from '../shared';
import { FlexContainer } from '../shared';
import { FlexRowContainer } from '../shared';
import { InfoContainer } from '../shared';
import { Reward } from '../shared/interfaces/Reward';
import { Service } from '../shared';
import { Transaction } from '../shared';
import electricIcon from '../shared/assets/eletricIcon.svg';
import { retrieveUserByCBU } from '../store/features/loginSlice';
import { useNavigate } from "react-router";

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const NavigateTo = useNavigate();
  const { success, balance, cbU_CVU } = useAppSelector((state) => state.login);
  const [services, setServices] = useState<Service[]>([]);
  const [activities, setActivities] = useState<Transaction[]>();
  const [rewards, setRewards] = useState<Reward[]>();


  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });

    const data = getServicesList();
    data.then((resp) => setServices(resp.slice(0, 3)));
    const data2 = getTransactionHistory(cbU_CVU);
    data2.then((resp) => setActivities(resp));
    const data3 = getRewardsList();
    data3.then((resp) => setRewards(resp))
    dispatch(retrieveUserByCBU(cbU_CVU))
    
  }, []);
  return (
    <Container headerHeight='55px' onLogging={success} >
      <Paper>
        <Title>My Balance</Title>
        <FlexContainer flexWidth='100%' flexGap='25px'>
          <InfoContainer
            canHide={true}
            containerLayout='Together'
            initShowState={true}
            fontDataSize='20px'
            fontWeight='Heavy_900'
            styleProps={{ buttonHeight: '40px', buttonWidth: '60px', buttonPadding: '6px' }}>
            {balance}
          </InfoContainer>
          <FlexRowContainer flexGap='5px'>
            <Button variant='blue' onClick={() => NavigateTo('/deposit')} width='100%'>
              Deposit
            </Button>
            <Button variant='blue' onClick={() => NavigateTo('/send')} width='100%'>
              Transfer
            </Button>
          </FlexRowContainer>
          </FlexContainer>
      </Paper>
      <Paper style={{marginTop: 30}}>
        <Title>Services</Title>
        <ServicesList services={services} />
      </Paper >
      <Paper style={{ marginTop: 30 }}>
        <Title>Recent Activities</Title>
        {activities?.slice(0, 3).map((activity) => {
          const actDate = new Date(activity.date).toLocaleDateString(undefined, {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
          });

          const reward = rewards?.find((reward) => reward.idReward === activity.idReward) as Reward;
          return !reward ? (
            <Activity
              key={activity.id}
              icon={electricIcon}
              quantity={activity.amount}
              serviceDescription={`${activity.typeDeposit ? activity.typeDeposit : 'none'}`}
              serviceTitle={activity.typeTransaction}
              date={actDate}
              typeItem='activity'
              totalPoints={activity.amount}
            />
          ) : (
            <Activity
              key={activity.id}
              icon={reward.rewardUrlImage}
              quantity={reward.points}
              serviceDescription={reward.name}
              serviceTitle={reward.name}
              date={actDate}
              typeItem='activity'
              totalPoints={activity.amount}
            />
          );
        })}
      </Paper>
    </Container>
  )
}
