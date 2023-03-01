import ShowCbu from '../../operations/components/ShowCbu';
import {
  Container,
  Paper,
  Title,
  FlexContainer,
  Avatar,
  Text,
  UserInfoContainer,
  FlexRowContainer,
} from '../../shared';
import { useAppSelector } from '../../store/hooks';
import PenIcon from '../../shared/Icons/PenIcon.svg';
import LinkIcon from '../../shared/Icons/LinkIcon.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { name, lastName, alias, cbU_CVU, success } = useAppSelector((state) => state.login);
  const NavigateTo = useNavigate();

  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
  }, []);

  return (
    <Container key={name} headerHeight='55px' onLogging={success}>
      <Paper>
        <Title>Profile</Title>
        <FlexContainer>
          <Avatar src='https://i.pravatar.cc' alt='' />
          <h3>
            {name} {lastName}
          </h3>
          <span style={{ color: '#88BDFF' }}>{alias}</span>
          <img src={LinkIcon} alt='link icon' />
        </FlexContainer>
        <ShowCbu cbu={cbU_CVU} />
        <UserInfoContainer>
          <div>
            <h3>Name:</h3>
          </div>
          <FlexRowContainer space='between'>
            <img src={PenIcon} alt='pen icon' />
            <Text>{name}</Text>
          </FlexRowContainer>
        </UserInfoContainer>
        <UserInfoContainer>
          <div>
            <h3>LastName:</h3>
          </div>
          <FlexRowContainer space='between'>
            <img src={PenIcon} alt='pen icon' />
            <Text>{lastName}</Text>
          </FlexRowContainer>
        </UserInfoContainer>
        <UserInfoContainer>
          <div>
            <h3>Email:</h3>
          </div>

          <Text marginTop='1.2rem'>{alias}</Text>
        </UserInfoContainer>
      </Paper>
    </Container>
  );
};

export default Profile;
