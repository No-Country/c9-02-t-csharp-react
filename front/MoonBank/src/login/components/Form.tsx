import { Button, Input } from '../../shared/styles';
import { AlertNotification } from './AlertNotification';
import { Login } from '../../shared/interfaces';
import { SwitchButton } from './SwitchButton';
import { logUser } from '../../APIS/postRequests';
import { setUser } from '../../store/features/loginSlice';
import { useAppDispatch } from '../../store/hooks';
import { useForm } from '../../shared/hooks/useForm';
import { useState } from 'react';

export const Form = () => {
  const dispatch = useAppDispatch();
  const [checkLogin, setCheckLogin] = useState(true);
  const { handleInputChange, password, email } = useForm({
    email: '',
    password: '',
  });

  const handleLogUser = () => {
    const data: Login = {
      email,
      password,
    };
    logUser(data).then((resp) => {
      if (!resp.data.success) {
        setCheckLogin(false);
      }
      dispatch(setUser(resp.data.result));
    });
  };
  return (
    <>
      <Input
        name='email'
        value={email}
        onChange={handleInputChange}
        type='text'
        placeholder='Email'
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
      <SwitchButton />
      {!checkLogin && <AlertNotification />}

      <Button marginTop='1rem' onClick={handleLogUser} variant='blue'>
        Log In
      </Button>
    </>
  );
};
