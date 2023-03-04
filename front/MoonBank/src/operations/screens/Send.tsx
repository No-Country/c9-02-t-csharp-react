import { Container, Paper, Title } from '../../shared';
import SendMoneyForm from '../components/SendMoneyForm/SendMoneyForm';
import { useAppSelector } from '../../store/hooks';

const Send = () => {
  const { success } = useAppSelector((state) => state.login);
  return (
    <>
      <Container headerHeight='55px' onLogging={success}>
        <Paper flexGap='20px'>
          <Title>Send Money</Title>
          <SendMoneyForm />
        </Paper>
      </Container>
    </>
  );
};

export default Send;
