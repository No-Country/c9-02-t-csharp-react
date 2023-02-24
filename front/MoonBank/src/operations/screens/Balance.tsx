import {
  Container,
  Paper,
  Text,
  Title,
  FlexContainer,
  FlexRowContainer,
  UserInfoContainer,
  Button,
} from '../../shared/styles';
import eyeIcon from '../../shared/assets/eyeIcon.svg';
import hideEyeIcon from '../../shared/assets/hideEyeIcon.svg';

// type Props = {
//   amount: number;
//   alias: string;
//   cbu: string;
// };

export const Balance = () => {
  return (
    <Container>
      <Paper>
        <Title>My balance</Title>

        <FlexContainer>
          <FlexRowContainer>
            <img src={eyeIcon} alt='eye icon' />
            <Text>$ 45,820.17</Text>
          </FlexRowContainer>

          <FlexRowContainer>
            <Button>Deposit</Button>
            <Button>Transfer</Button>
          </FlexRowContainer>

          <hr />
          <UserInfoContainer>
            <div>
              <h3>Alias:</h3>
            </div>
            <Text marginTop='1.2rem'>@sortOmega</Text>
          </UserInfoContainer>
          <UserInfoContainer>
            <div>
              <h3>CBU:</h3>
            </div>
            <FlexRowContainer space='between'>
              <img src={hideEyeIcon} alt='eye icon' />
              <Text>**************</Text>
            </FlexRowContainer>
          </UserInfoContainer>
        </FlexContainer>
      </Paper>
    </Container>
  );
};
