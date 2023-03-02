import { Container, Paper, Title, FlexContainer, Avatar, NavSeparator, InfoContainer } from '../../shared';
import { useAppSelector } from '../../store/hooks';
import LinkIcon from '../../shared/Icons/LinkIcon.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { name, lastName, alias, cbU_CVU, success, accountUrlImage, email } = useAppSelector((state) => state.login);

  const NavigateTo = useNavigate();

  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
  }, []);

  return (
    <Container key={name} headerHeight='55px' onLogging={success}>
      <Paper flexGap='20px'>
        <Title>Profile</Title>
        <FlexContainer flexGap='3px'>
          <Avatar src={accountUrlImage} alt='profile picture' />
          <h3>
            {name} {lastName}
          </h3>
          <span style={{ color: '#88BDFF' }}>{email}</span>
          <img src={LinkIcon} alt='link icon' />
        </FlexContainer>

        <NavSeparator orientation='horizontal' thickness='4px' />

        <InfoContainer
          infoSubtitle='CBU_CVU:'
          canHide={true}
          initShowState={false}
          styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
          {cbU_CVU}
        </InfoContainer>

        <InfoContainer
          infoSubtitle='NAME:'
          canHide={false}
          initShowState={true}
          styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
          {name}
        </InfoContainer>

        <InfoContainer
          infoSubtitle='LAST NAME:'
          canHide={false}
          initShowState={true}
          styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
          {lastName}
        </InfoContainer>

        <InfoContainer
          infoSubtitle='ALIAS:'
          canHide={false}
          initShowState={true}
          styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
          {alias}
        </InfoContainer>
      </Paper>
    </Container>
  );
};

export default Profile;
