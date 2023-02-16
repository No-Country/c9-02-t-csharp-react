import { Container, Paper, Text } from '../styles-components';

export const Login = () => {
  return (
    <Container>
      <Paper>
        <Text size='20px' weight='700' align='center'>
          Welcome back!
        </Text>
        <input type='text' />
        <input type='password' />
        <input type='text' />
        <div>
          <input type='checkbox' role='switch' />
        </div>

        <div>
          <button>Log In</button>
        </div>
        <div>
          <Text size='9px'>Forgot your password? | Forgot your username?</Text>
        </div>
      </Paper>
    </Container>
  );
};
