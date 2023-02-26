import {
  Container,
  Paper,
  Text,
  Title,
  FlexContainer,
  FlexRowContainer,
  UserInfoContainer,
  Button,
  useToggle
} from '../../shared';
import { useNavigate } from 'react-router';
import eyeIcon from '../../shared/assets/eyeIcon.svg';
import hideEyeIcon from '../../shared/assets/hideEyeIcon.svg';
import { useAppSelector } from '../../store/hooks';
export const Balance = () => {
  const navigate = useNavigate();
  const { balance, cbU_CVU, alias } = useAppSelector((state) => state.login);
  const {show, toggleChange} = useToggle()
  const navigateTo = (route: string) => {
    navigate(`${route}`);
  };
  return (
    <Container>
      <Paper>
        <Title>My balance</Title>

        <FlexContainer>
          <FlexRowContainer>
            <img src={eyeIcon} alt='eye icon' />
            <Text>$ {balance}</Text>
          </FlexRowContainer>

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
            <Text marginTop='1.2rem'>@{alias}</Text>
          </UserInfoContainer>
          <UserInfoContainer>
            <div>
              <h3>CBU:</h3>
            </div>
            <FlexRowContainer space='between'>
              <img src={hideEyeIcon} alt='eye icon' style={{cursor: 'pointer'}} onClick={() => toggleChange(!show)}/>
              <Text>  {show ? cbU_CVU : '*********** ********'}</Text>
            </FlexRowContainer>
          </UserInfoContainer>
        </FlexContainer>
      </Paper>
    </Container>
  );
};
