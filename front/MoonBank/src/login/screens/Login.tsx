import { useEffect } from 'react';
import { LocationState } from '../../shared/interfaces/LocationState';
import { FlexContainer, Container, Paper, Text } from '../../shared/styles';
import { LoginAlert } from '../../shared/styles/LoginAlert';
import { Form } from '../components';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { LinkStyled } from '../../shared';

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
          <LinkStyled To={'/terms-conditions'} Label='Terms and Conditions' fontSize='16px' />
          <LinkStyled To={'/security-policies'} Label='Security Policies' fontSize='16px' />
          <Text>Support Centre</Text>
        </FlexContainer>
      </Container>
    </>
  );
};
