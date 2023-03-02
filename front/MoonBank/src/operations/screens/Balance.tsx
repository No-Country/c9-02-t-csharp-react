import {
  Container,
  Paper,
  Text,
  Title,
  FlexContainer,
  FlexRowContainer,
  Button,
  NavSeparator,
  InfoContainer,
} from '../../shared';
import { useNavigate } from 'react-router';
import eyeIcon from '../../shared/assets/eyeIcon.svg';
import { useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';

export const Balance = () => {
  const { login } = useAppSelector((state) => state);

  const NavigateTo = useNavigate();

  useEffect(() => {
    !login.success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
  }, []);

  return (
    <Container headerHeight='55px' onLogging={login.success}>
      <Paper flexGap='20px'>
        <Title>My balance</Title>

        <FlexContainer flexWidth='100%' flexGap='25px'>
          <InfoContainer
            canHide={true}
            containerLayout='Together'
            initShowState={true}
            fontDataSize='20px'
            fontWeight='Heavy_900'
            styleProps={{ buttonHeight: '40px', buttonWidth: '60px', buttonPadding: '6px' }}>
            {login.balance}
          </InfoContainer>
          <FlexRowContainer flexGap='5px'>
            <Button variant='blue' onClick={() => NavigateTo('/deposit')} width='100%'>
              Deposit
            </Button>
            <Button variant='blue' onClick={() => NavigateTo('/send')} width='100%'>
              Transfer
            </Button>
          </FlexRowContainer>

          <NavSeparator orientation='horizontal' thickness='4px' size='100%' />

          <InfoContainer
            infoSubtitle='Alias:'
            canHide={false}
            initShowState={true}
            styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
            {login.alias}
          </InfoContainer>
          <InfoContainer
            infoSubtitle='CBU:'
            canHide={true}
            initShowState={false}
            styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
            {login.cbU_CVU}
          </InfoContainer>
        </FlexContainer>
      </Paper>
    </Container>
  );
};
