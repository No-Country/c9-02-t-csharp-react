import { Container, Paper, Title } from '../../shared';
import SendMoneyForm from '../components/SendMoneyForm/SendMoneyForm';

const Send = () => {
  return (
    <>
      <Container>
        <Paper flexGap='20px'>
          <Title>Send Money</Title>
          <SendMoneyForm />
        </Paper>
      </Container>
    </>
  );
};

export default Send;