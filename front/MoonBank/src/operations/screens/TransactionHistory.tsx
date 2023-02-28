import { Container, Paper, Title, FlexRowContainer, } from "../../shared"
import { useEffect, useState } from 'react';
import { getTransactionHistory, getRewardsList } from '../../APIS/getRequest';
import { Transaction } from '../../shared/interfaces/Transaction';
import { useAppSelector } from "../../store/hooks";
import { Activity } from "../components";
import { Reward } from '../../shared/interfaces/Reward';
import electricIcon from '../../shared/assets/eletricIcon.svg'
const TransactionHistory = () => {
    const [activities, setActivities] = useState<Transaction[]>()
    const [ rewards, setRewards] = useState<Reward[]>()
    const { cbU_CVU  } = useAppSelector((state) => state.login);

    useEffect(
        () => {
        const data = getTransactionHistory(cbU_CVU);
        data.then((resp) => setActivities(resp));
      }, [])
      useEffect(() => {
        const data = getRewardsList();
        data.then((resp) => setRewards(resp));
      }, []);

    return (
    <Container>
        <Paper>
        <Title>Activities</Title>
            {activities?.slice(0,5).map((activity) => {
            
            const actDate = new Date(activity.date).toLocaleDateString(undefined, {
              month: 'short',
              year: 'numeric',
              day: 'numeric'
            })
           
            const  reward = rewards?.find(reward => reward.idReward === activity.idReward) as Reward 
           console.log(activity)
         return (

          !reward ? 
             (
                  <Activity
                  key={activity.id}
                  icon={electricIcon}
                  quantity={activity.amount}
                  serviceDescription={`${activity.typeDeposit? activity.typeDeposit : 'none'}`}
                  serviceTitle={activity.typeTransaction}
                  date={actDate}
                  typeItem='activity'
                  totalPoints={activity.amount}
              />
                ) :   ( <Activity
                  key={activity.id}
                  icon={reward.rewardUrlImage}
                  quantity={reward.points}
                  serviceDescription={reward.name}
                  serviceTitle={reward.name}
                  date={actDate}
                  typeItem='activity'
                  totalPoints={activity.amount}
              />) 
             )
            
            
            })}
        </Paper>
        
       </Container>
  )
}

export default TransactionHistory