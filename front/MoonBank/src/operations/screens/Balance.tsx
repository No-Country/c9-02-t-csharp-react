import {
  Container,
  Paper,
  Text,
  Title,
  FlexContainer,
  FlexRowContainer,
  UserInfoContainer,
  Button,
} from '../../shared';
import { useNavigate } from 'react-router';
import eyeIcon from '../../shared/assets/eyeIcon.svg';
import { useAppSelector } from '../../store/hooks';
import ShowCbu from '../components/ShowCbu';
export const Balance = () => {
  const navigate = useNavigate();
  const { login } = useAppSelector((state) => state);

  const navigateTo = (route: string) => {
    navigate(`${route}`);
  };

  return (
    <Container headerHeight='55px' onLogging={login.success}>
      <Paper>
        <Title>My balance</Title>

        <FlexContainer>
          <FlexRowContainer>
            <img src={eyeIcon} alt='eye icon' />
            <Text>$ {login.balance}</Text>
          </FlexRowContainer>
          <ShowCbu cbu={login.cbU_CVU} />
          <FlexRowContainer>
            <Button variant='blue' onClick={() => navigateTo('/deposit')}>
              Deposit
            </Button>
            <Button variant='blue' onClick={() => navigateTo('/transfer')}>
              Transfer
            </Button>
          </FlexRowContainer>

          <hr />
          <hr />
          <UserInfoContainer>
            <div>
              <h3>Alias:</h3>
            </div>
            <Text marginTop='1.2rem'>@{login.alias}</Text>
          </UserInfoContainer>
        </FlexContainer>
      </Paper>
    </Container>
  );
};
