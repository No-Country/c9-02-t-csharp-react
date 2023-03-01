import { Paper, Title, Text, SubTitle, FlexContainer } from '../../../shared';

export const AboutTermsPaper = () => {
  return (
    <Paper flexGap='20px'>
      <Title>Terms & Conditions</Title>

      <Text align='justify' size='14px'>
        Welcome to MoonBank, the digital banking app. The following terms and conditions ("Terms and Conditions")
        substantiate the terms and conditions for the use of our MoonBank application ("Application"). By using the
        Application, you agree to these Terms and Conditions.
      </Text>

      {/* 1 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Use of the Application</SubTitle>
        <Text align='justify' size='14px'>
          The Application is owned by MoonBank and is intended solely for personal and non-commercial use. You agree not
          to use the Application for any illegal, inappropriate, or prohibited purpose.
        </Text>
      </FlexContainer>

      {/* 2 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Registration</SubTitle>
        <Text align='justify' size='14px'>
          To use the Application, you must register and create an account. You are responsible for maintaining the
          confidentiality of your login information and any activity that occurs on your account.
        </Text>
      </FlexContainer>

      {/* 3 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Intellectual Property</SubTitle>
        <Text align='justify' size='14px'>
          MoonBank is the owner of all intellectual property rights related to the Application, including but not
          limited to trademarks, copyrights, patents, trade names, designs, and logos. You agree not to use or reproduce
          such materials without the express written authorization of MoonBank.
        </Text>
      </FlexContainer>

      {/* 4 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>User Responsability</SubTitle>
        <Text align='justify' size='14px'>
          You are solely responsible for any activity that occurs on your account and agree to indemnify, defend, and
          hold harmless MoonBank and its affiliates, and their respective officers, directors, employees, and agents,
          from any claim, liability, cost, or expense, including reasonable attorneys' fees, related to your use of the
          Application or your breach of these Terms and Conditions.
        </Text>
      </FlexContainer>

      {/* 5 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Changes to the Application</SubTitle>
        <Text align='justify' size='14px'>
          MoonBank reserves the right to change, suspend, remove or discontinue any part of the Application at any time,
          without prior notice.
        </Text>
      </FlexContainer>

      {/* 6 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Limitation of Liability</SubTitle>
        <Text align='justify' size='14px'>
          MoonBank shall not be liable for any direct, indirect, incidental, special, consequential or punitive damages,
          including but not limited to loss of profits, loss of revenue, loss of data, business interruption or any
          similar damages, resulting from the use or inability to use the Application.
        </Text>
      </FlexContainer>

      {/* 7 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Applicable Law</SubTitle>
        <Text align='justify' size='14px'>
          These Terms and Conditions shall be governed and interpreted in accordance with the laws of the country in
          which MoonBank is located, without giving effect to any principles of conflict of laws.
        </Text>
      </FlexContainer>

      {/* 8 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Changes to the Terms and Conditions</SubTitle>
        <Text align='justify' size='14px'>
          MoonBank reserves the right to change these Terms and Conditions at any time, without prior notice. The most
          current version of the Terms and Conditions will be posted on the Application.
        </Text>
      </FlexContainer>

      {/* 9 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Entire Agreement</SubTitle>
        <Text align='justify' size='14px'>
          These Terms and Conditions constitute the entire agreement between you and MoonBank with respect to the use of
          the Application.
        </Text>
        <Text>
          By using the Application, you agree to these Terms and Conditions. If you do not agree to these Terms and
          Conditions, do not use the Application and log out. If you have any questions about these Terms and
          Conditions, please contact us through the support section of the Application.
        </Text>
        <Text>
          Thank you for using MoonBank, we hope you have a satisfying experience with our digital banking application.
        </Text>
      </FlexContainer>
    </Paper>
  );
};
