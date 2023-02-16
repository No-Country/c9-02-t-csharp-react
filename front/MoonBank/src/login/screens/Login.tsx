import '../styles/main.css';

import { Container, Paper, Text } from '../styles-components';

import { Form } from '../components';

export const Login = () => {
  return (
    <Container>
      <Paper>
        <Text size='20px' weight='700' align='center'>
          Welcome back!
        </Text>
        <Text marginTop='12px' align='center'>
          The Moon is waiting for your return
        </Text>
        <Form />
        <Text size='9px' marginTop='1rem'>
          Forgot your password? | Forgot your username?
        </Text>
      </Paper>
      <Text marginTop='1rem'>Terms and Conditions</Text>
      <Text marginTop='0.5rem'>Security Policies</Text>
      <Text marginTop='0.5rem'>Support Centre</Text>
    </Container>
  );
};
