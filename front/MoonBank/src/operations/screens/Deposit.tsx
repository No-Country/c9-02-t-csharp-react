import { Container, Paper, Title, Text, Button, FlexContainer, FlexRowContainer } from '../../shared/styles';
import { DepositForm } from '../components/depositForm/DepositForm';

const Deposit = () => {
  return (
    <Container>
      <Paper>
        <Title>Deposit</Title>
        <DepositForm />
        
      </Paper>
    </Container>
  );
};

export default Deposit;
