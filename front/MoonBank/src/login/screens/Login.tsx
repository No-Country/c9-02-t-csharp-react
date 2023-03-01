import { useEffect } from 'react';
import { LocationState } from '../../shared/interfaces/LocationState';
import { FlexContainer, Container, Paper, Text } from '../../shared/styles';
import { LoginAlert } from '../../shared/styles/LoginAlert';
import { Form } from '../components';
import { useLocation, useNavigate } from 'react-router';
import { useAppSelector } from '../../store/hooks';

export const Login = () => {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const NavigateTo = useNavigate();
  const { state } = useLocation();
  const { success } = useAppSelector((state) => state.login);
  const LoginStatus = state as LocationState;

  useEffect(() => {
    success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
  }, []);
  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //
  return (
    <>
      {LoginStatus === null ? (
        <></>
      ) : (
        LoginStatus.loggedOut === true && (
          <LoginAlert headerHeight='55px' boxHeight='50px'>
            You have been logged out for been idle!
          </LoginAlert>
        )
      )}
      <Container onLogging={false} headerHeight='55px'>
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
    </>
  );
};
