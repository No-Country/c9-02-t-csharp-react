import { Alert, Text } from '../styled-components';

import { IoWarning } from 'react-icons/io5';

export const AlertNotification = () => {
  return (
    <Alert>
      <IoWarning color='white' size={50} />
      <Text marginLeft='5px' size='10px'>
        Do not share your Username, Password or Token with anyone! More security advice here.
      </Text>
    </Alert>
  );
};
