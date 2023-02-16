import {
  Button,
  Container,
  Input,
  Paper,
  Text
} from '../styles-components';

import { SwitchButton } from '../components';

export const Login = () => {
  return (
    <Container>
      <Paper>
        <Text size='20px' weight='700' align='center'>
          Welcome back!
        </Text>
        <Input type='text' placeholder='Username' marginBottom='1rem' />
        <Input type='password' placeholder='Password' marginBottom='1rem' />
        <Input type='text' placeholder='Moon Token' marginBottom='1rem' />
        <SwitchButton />
        <Button>Log In</Button>
        <Text size='12px'>Forgot your password? | Forgot your username?</Text>
      </Paper>
    </Container>
  );
};
