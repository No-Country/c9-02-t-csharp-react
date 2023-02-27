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
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { retrieveUser } from '../../store/features/loginSlice';

export const Balance = () => {
  const navigate = useNavigate();
  const { login } = useAppSelector((state) => state)
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
            <Text>$ {login.balance}</Text>
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
            <Text marginTop='1.2rem'>@{login.alias}</Text>
          </UserInfoContainer>
          <UserInfoContainer>
            <div>
              <h3>CBU:</h3>
            </div>
            <FlexRowContainer space='between'>
              <img src={hideEyeIcon} alt='eye icon' style={{cursor: 'pointer'}} onClick={() => toggleChange(!show)}/>
              <Text>  {show ? login.cbU_CVU : '*********** ********'}</Text>
            </FlexRowContainer>
          </UserInfoContainer>
        </FlexContainer>
      </Paper>
    </Container>
  );
};
