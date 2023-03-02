import { Alert, Text } from '../styled-components';

import alertIcon from '../../shared/assets/alertIcon.svg';

export const AlertNotification = () => {
  return (
    <Alert>
      <img src={alertIcon} alt={alertIcon} />
      <Text marginLeft='5px' size='10px'>
      This email doest´t exists or is not associated with an account
      </Text>
    </Alert>
  );
};
