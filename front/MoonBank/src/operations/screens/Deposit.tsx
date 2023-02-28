import { Container, Paper, Title } from '../../shared';
import { DepositForm } from '../components/depositForm/DepositForm';

const Deposit = () => {
  return (
    <Container>
      
      <Paper >
      <Title>Deposit</Title>
        <DepositForm />
      </Paper>
    </Container>
  );
};

export default Deposit;
