import { Alert, Text } from '../styled-components';
import alertIcon from '../../shared/assets/alertIcon.svg';

export const AlertNotification = () => {
  return (
    <Alert>
      <img src={alertIcon} alt={alertIcon} />
      <Text marginLeft='5px' size='10px'>
        Do not share your Username, Password or Token with anyone! More security advice here.
      </Text>
    </Alert>
  );
};
