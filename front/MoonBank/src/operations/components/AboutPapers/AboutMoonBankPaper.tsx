import { Paper, Title, FlexContainer, Image, NavSeparator, Text } from '../../../shared';
import MoonLogo from '../../../shared/assets/MoonBankLogo.jpg';

export const AboutMoonBankPaper = () => {
  return (
    <Paper flexGap='20px'>
      <Title>About</Title>
      <FlexContainer marginBox='0px' flexGap='20px' flexWidth='100%'>
        <Image src={MoonLogo} imageWidth='90px' imageHeight='auto' borderRadius='100%' />
        <Title alignSelf='center'>MoonBank</Title>
        <NavSeparator orientation='horizontal' thickness='4px' size='100%' />
        <FlexContainer marginBox='0' flexGap='5px' flexWidth='100%'>
          <Text weight='400' margin='0px'>
            by
          </Text>
          <Text weight='700' margin='0px'>
            NoCountry
          </Text>
          <Text weight='700' margin='0px'>
            & C9-02 Group
          </Text>
        </FlexContainer>
      </FlexContainer>
    </Paper>
  );
};
