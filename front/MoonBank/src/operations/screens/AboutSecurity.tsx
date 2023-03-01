import { Container, FlexContainer } from '../../shared';
import { AboutMoonBankPaper, AboutTermsPaper, AboutSecurityPaper, ReturnButton } from '../components';

const AboutSecurity = () => {
  return (
    <>
      <Container onLogging={false} headerHeight='55px'>
        <FlexContainer flexGap='20px' marginBox='0'>
          <ReturnButton width='100%' height='50px' fontSize='18px' />
          <AboutSecurityPaper />
        </FlexContainer>
      </Container>
    </>
  );
};

export default AboutSecurity;
