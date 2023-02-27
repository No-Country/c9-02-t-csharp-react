import { useEffect, useState } from 'react';
import { Container, Paper, Title, Reward } from '../../shared';
import { getRewardsList } from '../../APIS/getRequest';
import { Activity } from '../components/Activity';
import { useAppSelector } from '../../store/hooks';
import { RedeemReward } from '../../APIS/TransactionRequests';
import { useAppDispatch } from '../../store/hooks';
import { retrieveUser } from '../../store/features/loginSlice';

const Rewards = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const { login } = useAppSelector((state) => state);
const dispatch = useAppDispatch()
  useEffect(() => {
    const data = getRewardsList();
    data.then((resp) => setRewards(resp));
  }, []);
  useEffect(() => {
    dispatch(retrieveUser(login.alias))
  }, [login]);
  
  
  const redeemReward = (idReward: number) => {
     RedeemReward({
      typeTransaction: 3,
      destinationAccountAlias: login.alias,
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
            transaction={() => redeemReward(reward.idReward)}
            typeItem='reward'
            totalPoints={login.rewardPoints}
          />
        ))}
      </Paper>
    </Container>
  );
};

export default Rewards;
