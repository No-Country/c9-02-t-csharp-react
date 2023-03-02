import { useEffect } from 'react';
import { LocationState } from '../../shared/interfaces/LocationState';
import { FlexContainer, Container, Paper, Text, Title } from '../../shared/styles';
import { LoginAlert } from '../../shared/styles/LoginAlert';
import { Form } from '../components';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { LinkStyled, NavSeparator } from '../../shared';

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
        <Paper flexGap='20px'>
          <Title alignSelf='center' fontSize='24px'>
            Welcome back!
          </Title>
          <Text align='center'>The Moon is waiting for your return</Text>
          <Form />
          <FlexContainer flexGap='5px' direction='row'>
            <Text fontSize='14px' align='center'>
              Forgot your password?
            </Text>
            <NavSeparator orientation='vertical' thickness='5px' size='100%' />
            <Text fontSize='14px' align='center'>
              Forgot your username?
            </Text>
          </FlexContainer>
        </Paper>

        <FlexContainer flexGap='5px' marginBox='15px 0'>
          <LinkStyled To={'/terms-conditions'} Label='Terms and Conditions' fontSize='16px' />
          <LinkStyled To={'/security-policies'} Label='Security Policies' fontSize='16px' />
          <LinkStyled To={'/support'} Label='Support Center' fontSize='16px' />
        </FlexContainer>
      </Container>
    </>
  );
};
