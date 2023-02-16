import '../styles/main.css'

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
        <Text marginTop='12px' align='center'>The Moon is waiting for your return</Text>
        <Input type='text' placeholder='Username' marginBottom='1rem' marginTop='1rem' fontSize='12px' />
        <Input type='password' placeholder='Password' marginBottom='1rem' />
        <Input type='text' placeholder='Moon Token' marginBottom='1rem' />
        <SwitchButton />
        <Button marginTop='1rem'>Log In</Button>
        <Text size='9px' marginTop='1rem'>Forgot your password? | Forgot your username?</Text>
      </Paper>
    </Container>
  );
};
