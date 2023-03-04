import { Button, FlexContainer, FlexRowContainer, InfoContainer, Service, Transaction, useIsLoading } from '../shared';
import { Container, Paper, Title } from '../shared/styles';
import { ServicesList, TransactionsList } from '../operations/components';
import { getRewardsList, getServicesList, getTransactionHistory } from '../APIS/getRequest';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useState } from 'react';

import { Reward } from '../shared/interfaces/Reward';
import { retrieveUserByCBU } from '../store/features/loginSlice';
import { useNavigate } from 'react-router';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const NavigateTo = useNavigate();
  const { success, balance, cbU_CVU, alias } = useAppSelector((state) => state.login);
  const {isLoading, setIsLoading} = useIsLoading(false)
  const [services, setServices] = useState<Service[]>([]);
  const [activities, setActivities] = useState<Transaction[]>();
  const [rewards, setRewards] = useState<Reward[]>();

  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
    setIsLoading(true)
    const data = getServicesList();
    data.then((resp) => setServices(resp.slice(0, 3)));
    const data2 = getTransactionHistory(cbU_CVU);
    data2.then((resp) => setActivities(resp.reverse()));
    const data3 = getRewardsList();
    data3.then((resp) => setRewards(resp));
    dispatch(retrieveUserByCBU(cbU_CVU));
    setIsLoading(false)
  }, []);
  return (
    <Container headerHeight='55px' onLogging={success}>  
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
      <Paper style={{ marginTop: 30 }}>
        <Title>Services</Title>
        <ServicesList services={services} />
      </Paper>
      <Paper style={{ marginTop: 30 }}>
        <Title>Recent Activities</Title>
        <TransactionsList activities={activities} alias={alias} rewards={rewards} sliceInit={0} sliceFin={5} />
      </Paper>
    </Container>
  );
};
