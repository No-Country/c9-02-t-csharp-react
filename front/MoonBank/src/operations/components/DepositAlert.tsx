import { Alert, Text } from "../../shared/styles";

export const DeposiAlert = () => {
  return (
    <Alert>
      {/* icono */}
      <Text marginLeft='5px' size='10px'>
        Do not share your Username, Password or Token with anyone! More security advice here.
      </Text>
    </Alert>
  );
};