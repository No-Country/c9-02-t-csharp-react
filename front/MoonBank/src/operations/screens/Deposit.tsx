
import { Container, Paper, Title } from '../../shared/styles';
import { useAppSelector } from '../../store/hooks';
import { DepositForm } from '../components/depositForm/DepositForm';

const Deposit = () => {
 

  return (
    <Container>
      <Paper>
        <Title>Deposit</Title>
        <DepositForm/>
        
      </Paper>
    </Container>
  );
};

export default Deposit;
