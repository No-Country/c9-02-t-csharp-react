import { Paper, Title, Text, FlexContainer, SubTitle } from '../../../shared';

export const AboutSecurityPaper = () => {
  return (
    <Paper flexGap='20px'>
      <Title>Security Policies</Title>

      {/* 1 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Secure Password Policy</SubTitle>
        <Text align='justify'>
          Users are required to choose secure passwords when registering for the application. Additionally, users are
          recommended not to use the same password for multiple accounts and to change their passwords regularly.
        </Text>
      </FlexContainer>

      {/* 2 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Suspicious Activity Monitoring Policy</SubTitle>
        <Text align='justify' size='14px'>
          Application activity must be continuously monitored for suspicious activity, such as unauthorized login
          attempts and large money transfers to unknown accounts. If suspicious activity is detected, immediate action
          must be taken to protect the user's account and the security of the application.
        </Text>
      </FlexContainer>

      {/* 3 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Data Encryption Policy</SubTitle>
        <Text align='justify' size='14px'>
          All sensitive data, such as passwords and financial transaction details, must be encrypted in transit and at
          rest. Bank-level encryption should be used to ensure that data is transmitted and stored securely.
        </Text>
      </FlexContainer>

      {/* 4 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Limited Access Policy</SubTitle>
        <Text align='justify' size='14px'>
          Only authorized employees should have access to user data and only to the extent necessary to perform their
          job. Access to user data must be limited to employees who need that specific information to perform their job.
        </Text>
      </FlexContainer>

      {/* 5 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Software Update Policy</SubTitle>
        <Text align='justify' size='14px'>
          The application and all underlying systems must be kept up to date with the latest security fixes and software
          patches. Regular software updates should be performed to ensure that the application and underlying systems
          are protected against known vulnerabilities.
        </Text>
      </FlexContainer>

      {/* 6 */}
      <FlexContainer flexWidth='100%' flexGap='6px' marginBox='0px'>
        <SubTitle textColor='var(--BlueSL)'>Regular Backup Policy</SubTitle>
        <Text align='justify' size='14px'>
          Regular backups of all application data should be performed and securely stored off-site. In the event of a
          disaster, backups will allow the application to be restored and operational as soon as possible.
        </Text>
      </FlexContainer>
    </Paper>
  );
};
