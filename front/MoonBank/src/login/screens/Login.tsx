import {
  Box,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Container,
  Input,
  Paper,
  Text,
} from '../styles-components';

export const Login = () => {
  return (
    <Container>
      <Paper>
        <Text size='20px' weight='700' align='center'>
          Welcome back!
        </Text>
        <Input type='text' placeholder='Username' marginBottom='1rem' />
        <Input type='password' placeholder='Password' marginBottom='1rem' />
        <Input type='text' placeholder='Moon Token' marginBottom='1rem'/>
        <Box alignContent='center'>
          <CheckBoxWrapper>
            <CheckBox id='checkbox' type='checkbox' />
            <CheckBoxLabel htmlFor='checkbox' />
          </CheckBoxWrapper>
          <Text weight='700'>Remember me</Text>
        </Box>

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
