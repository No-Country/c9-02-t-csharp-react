import { Container, Paper, Text } from '../styled-components';
import {FlexContainer} from "../../shared/styles/sharedStyles";
import { Form } from '../components';

export const Login = () => {
  return (
    <Container
    >

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

        <FlexContainer>

            <Text>Terms and Conditions</Text>
            <Text>Security Policies</Text>
            <Text>Support Centre</Text>
        </FlexContainer>

    </Container>
  );
};
