import { useEffect, useState } from 'react';
import { Container, Paper, Title, Reward } from '../../shared';
import { getRewardsList } from '../../APIS/getRequest';
import { Activity } from '../components/Activity';
import { useAppSelector } from '../../store/hooks';
import { RedeemReward } from '../../APIS/TransactionRequests';
const Rewards = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const { rewardPoints, cbU_CVU, alias } = useAppSelector((state) => state.login);
const id =  +alias.split('b')[1]
console.log(rewardPoints)
  useEffect(() => {
    const data = getRewardsList();
    data.then((resp) => setRewards(resp));
  }, []);

  const redeemReward = (idReward: number) => {
    RedeemReward({
      typeTransaction: 3,
      idSourceAccount: cbU_CVU,
      idReward,
    });
  };

  return (
    <Container>
      <Paper>
        <Title>Rewards</Title>
        {rewards?.map((reward) => (
          <Activity
            key={reward.idReward}
            icon={`${reward.rewardUrlImage}`}
            quantity={reward.points}
            serviceDescription='amazon.com.mb'
            serviceTitle={reward.name}
            transaction={() => redeemReward(id)}
            typeItem='reward'
            totalPoints={rewardPoints}
          />
        ))}
      </Paper>
    </Container>
  );
};

export default Rewards;
