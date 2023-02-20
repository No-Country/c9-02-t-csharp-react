import {
  Box,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Text,
} from '../styles-components';

export const SwitchButton = () => {
  return (
    <Box alignContent='center' marginBottom='1rem'>
      <CheckBoxWrapper>
        <CheckBox id='checkbox' type='checkbox' />
        <CheckBoxLabel htmlFor='checkbox' />
      </CheckBoxWrapper>
      <Text marginLeft='1rem' weight='700'>Remember me</Text>
    </Box>
  );
};
