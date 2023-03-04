import { Container, Paper, Title } from '../../shared';
import { getRewardsList, getTransactionHistory } from '../../APIS/getRequest';
import { useEffect, useState } from 'react';

import { Reward } from '../../shared/interfaces/Reward';
import { Transaction } from '../../shared/interfaces/Transaction';
import { TransactionsList } from '../components';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router';

const TransactionHistory = () => {
  const NavigateTo = useNavigate();
  const [activities, setActivities] = useState<Transaction[]>();
  const [rewards, setRewards] = useState<Reward[]>();
  const { cbU_CVU, success, alias } = useAppSelector((state) => state.login);

  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
    const data = getTransactionHistory(cbU_CVU);
    data.then((resp) => setActivities(resp.reverse()));
  }, []);
  useEffect(() => {
    const data = getRewardsList();
    data.then((resp) => setRewards(resp));
  }, []);

  return (
    <Container headerHeight='55px' onLogging={success}>
      <Paper>
        <Title>Activities</Title>
        <TransactionsList
          activities={activities}
          alias={alias}
          rewards={rewards}
          sliceInit={0}
          sliceFin={activities?.length}
        />
      </Paper>
    </Container>
  );
};

export default TransactionHistory;
