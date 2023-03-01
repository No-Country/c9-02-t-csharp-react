import React from 'react';
import { Container, FlexContainer, Paper, SubTitle, Title, Text, LinkStyled } from '../../shared';
import { useAppSelector } from '../../store/hooks';

const Page404 = () => {
  const { success, name, lastName } = useAppSelector((state) => state.login);

  return (
    <Container headerHeight='55px' onLogging={success}>
      <Paper flexGap='20px'>
        <FlexContainer flexWidth='100%' marginBox='0px' flexGap='0px'>
          <Title alignSelf='center' fontSize='44px' textColor='var(--RedInvalid)'>
            404
          </Title>
          <SubTitle alignSelf='center' textColor='var(--RedInvalid)'>
            Page Not Found
          </SubTitle>
        </FlexContainer>

        <FlexContainer flexWidth='100%' marginBox='0px'>
          {!success ? (
            <>
              <Title fontSize='24px' alignSelf='center' textMargin='0'>
                Hello Visitor
              </Title>
              <Title fontSize='24px' alignSelf='center' textMargin='0'>
                👋
              </Title>
              <Text>Are you new here?</Text>
              <Text>Don't get lost! Try to use the link below</Text>
              <LinkStyled To='/' Label='Login Page' fontSize='18px' color='var(--BlueSL)' />
            </>
          ) : (
            <>
              <Title fontSize='24px' alignSelf='center' textMargin='0'>
                Hello, {name} {lastName}
              </Title>
              <Title fontSize='24px' alignSelf='center' textMargin='0'>
                👋
              </Title>
              <Text>IIt seems you are lost. ¿Or are you just looking around?</Text>
              <Text>Here is a link below if you want to come back home.</Text>
              <LinkStyled To='/home' Label='Home Page' fontSize='18px' color='var(--BlueSL)' />
            </>
          )}
        </FlexContainer>
      </Paper>
    </Container>
  );
};

export default Page404;
