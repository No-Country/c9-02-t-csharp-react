import { Container, Paper, Title, FlexRowContainer, Reward } from "../../shared"
import { useEffect, useState } from 'react';
import { getTransactionHistory, getRewardsList } from '../../APIS/getRequest';
import { Transaction } from '../../shared/interfaces/Transaction';
import { useAppSelector } from "../../store/hooks";
import { Activity } from "../components";

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
            {activities?.map((activity) => {
            const actDate = new Date(activity.date).toLocaleDateString(undefined, {
              month: 'short',
              year: 'numeric',
              day: 'numeric'
            })
            return rewards?.map((reward) => (

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
                ) )
            
            
            })}
        </Paper>
        
       </Container>
  )
}

export default TransactionHistory