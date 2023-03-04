import { Container, Paper, Title } from '../../shared';
import { DepositForm } from '../components/depositForm/DepositForm';
import { useAppSelector } from '../../store/hooks';

const Deposit = () => {
  const { success } = useAppSelector((state) => state.login);
  return (
    <Container headerHeight='55px' onLogging={success}>
      <Paper flexGap='25px'>
        <Title>Deposit</Title>
        <DepositForm />
      </Paper>
    </Container>
  );
};

export default Deposit;
