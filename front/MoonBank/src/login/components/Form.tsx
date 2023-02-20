import { Alert, Button, Input, Text } from '../styles-components';

import { SwitchButton } from './SwitchButton';
import { useForm } from '../../shared/hooks/useForm';

export const Form = () => {
  const { handleInputChange, moonToken, password, username } = useForm({
    username: '',
    password: '',
    moonToken: '',
  });
  return (
    <>
      <Input
        name='username'
        value={username}
        onChange={handleInputChange}
        type='text'
        placeholder='Username'
        marginBottom='1rem'
        marginTop='1rem'
        fontSize='12px'
      />
      <Input
        name='password'
        value={password}
        onChange={handleInputChange}
        type='password'
        placeholder='Password'
        marginBottom='1rem'
      />
      <Input
        name='moonToken'
        value={moonToken}
        onChange={handleInputChange}
        type='text'
        placeholder='Moon Token'
        marginBottom='1rem'
      />
      <SwitchButton />
      <Alert>
        <Text>Do not share your Username, Password or Token with anyone! More security advice here.</Text>
      </Alert>
      <Button marginTop='1rem'>Log In</Button>
    </>
  );
};
