import { Container, FlexRowContainer, Paper, Title } from '../../shared';
import { getRewardsList, getTransactionHistory } from '../../APIS/getRequest';
import { useEffect, useState } from 'react';

import { Activity } from '../components';
import { Reward } from '../../shared/interfaces/Reward';
import { Transaction } from '../../shared/interfaces/Transaction';
import arrowGreenIcon from '../../shared/assets/arrowInIcon.svg'
import arrowRedIcon from '../../shared/assets/arrowOutIcon.svg'
import electricIcon from '../../shared/assets/eletricIcon.svg';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router';

const TransactionHistory = () => {
  const NavigateTo = useNavigate();
  const [activities, setActivities] = useState<Transaction[]>();
  const [rewards, setRewards] = useState<Reward[]>();
  const { cbU_CVU, success, alias } = useAppSelector((state) => state.login);

  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
    const data = getTransactionHistory(cbU_CVU)
    data.then((resp) => setActivities(resp.reverse()));
  }, []);
  useEffect(() => {
    const data = getRewardsList();
    data.then((resp) => setRewards(resp));
  }, []);


  const setIcon = (typeTransaction: string) => { 
     switch (typeTransaction) {
      case 'Deposit':
        return arrowGreenIcon
       case 'PayService':
         return arrowRedIcon
       case 'Reward': 
         return arrowRedIcon
       case 'Transfer':
         let icon;
          activities?.find(a => {
            if (a.idDestinationAccount == Number(alias.split("b")[1])) {
              console.log(alias.split("b")[1])
              console.log(a.idDestinationAccount)
             icon = arrowGreenIcon
           } else if (a.idDestinationAccount !== Number(alias.split("b")[1])) {
            icon = arrowRedIcon
           }
          })
         return icon
      default:
        break;
     }
   }

  return (
    <Container headerHeight='55px' onLogging={success}>
      <Paper>
        <Title>Activities</Title>
        {activities?.map((activity) => {
          const actDate = new Date(activity.date).toLocaleDateString(undefined, {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
          });

          const reward = rewards?.find((reward) => reward.idReward === activity.idReward) as Reward;
         
          return !reward ? (
            <Activity
              key={activity.id}
              icon={setIcon(activity.typeTransaction)!}
              quantity={activity.amount}
              serviceDescription={`${activity.typeDeposit ? activity.typeDeposit : 'none'}`}
              serviceTitle={activity.typeTransaction}
              date={actDate}
              typeItem='activity'
              totalPoints={activity.amount}
              idAccount={Number(alias.split("b")[1])}
              idDestinationAccount={activity.idDestinationAccount}
              typeTransaction={activity.typeTransaction}
            />
          ) : (
            <Activity
               key={activity.id}
               icon={setIcon(activity.typeTransaction)!}
              quantity={reward.points}
              serviceDescription={reward.name}
              serviceTitle={reward.name}
              date={actDate}
              typeItem='activity'
                totalPoints={activity.amount}
                idAccount={Number(alias.split("b")[1])}
              idDestinationAccount={activity.idDestinationAccount}
              typeTransaction={activity.typeTransaction}
            />
          );
        })}
      </Paper>
    </Container>
  );
};

export default TransactionHistory;
