import { Container, Paper, Reward, Title } from '../../shared';
import { useEffect, useState } from 'react';

import { Activity } from '../components/Activity';
import { RedeemReward } from '../../APIS/TransactionRequests';
import { getRewardsList } from '../../APIS/getRequest';
import { retrieveUser } from '../../store/features/loginSlice';
import { useAppDispatch } from '../../store/hooks';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router';

const Rewards = () => {
  const NavigateTo = useNavigate();
  const [rewards, setRewards] = useState<Reward[]>([]);
  const { login } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !login.success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
    const data = getRewardsList();
    data.then((resp) => setRewards(resp));
  }, []);
  useEffect(() => {
    dispatch(retrieveUser(login.alias));
  }, []);

  const redeemReward = (idReward: number) => {
    RedeemReward({
      typeTransaction: 3,
      destinationAccountAlias: login.alias,
      idReward,
    });
  };

  return (
    <Container headerHeight='55px' onLogging={login.success}>
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
