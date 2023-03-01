import { useEffect } from 'react';
import { Container, FlexContainer } from '../../shared';
import { AboutMoonBankPaper, AboutTermsPaper, AboutSecurityPaper } from '../components/';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router';

const About = () => {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const NavigateTo = useNavigate();
  const { success } = useAppSelector((state) => state.login);

  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
  }, []);

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //

  return (
    <>
      <Container onLogging={success} headerHeight='55px'>
        <FlexContainer flexGap='20px' marginBox='0'>
          <AboutMoonBankPaper />
          <AboutTermsPaper />
          <AboutSecurityPaper />
        </FlexContainer>
      </Container>
    </>
  );
};

export default About;
