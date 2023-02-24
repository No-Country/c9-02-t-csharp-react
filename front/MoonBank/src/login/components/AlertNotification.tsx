import { Alert, Text } from "../styled-components";

export const AlertNotification = () => {
  return (
    <Alert>
      {/* icono */}
      <Text marginLeft='5px' size='10px'>
        Do not share your Username, Password or Token with anyone! More security
        advice here.
      </Text>
    </Alert>
  );
};
