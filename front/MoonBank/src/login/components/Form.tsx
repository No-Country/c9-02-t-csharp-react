import { Button, Input, Box, LabelInput, Label } from '../../shared/styles';
import { AlertNotification } from './AlertNotification';
import { Login } from '../../shared/interfaces';
import { Text } from '../../shared/styles';
import { logUser } from '../../APIS/postRequests';
import { setUser } from '../../store/features/loginSlice';
import { useAppDispatch } from '../../store/hooks';
import { useForm } from '../../shared/hooks/useForm';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Form = () => {
  const NavigateTo = useNavigate();
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
      NavigateTo('/home');
    });
  };
  return (
    <>
      <LabelInput contentDirection='column' gap='3px'>
        <Label width='100%'>EMAIL:</Label>
        <Input
          name='email'
          value={email}
          onChange={handleInputChange}
          type='text'
          placeholder='Email'
          width='100%'
          fontSize='12px'
        />
      </LabelInput>
      <LabelInput contentDirection='column' gap='3px'>
        <Label width='100%'>PASSWORD:</Label>
        <Input name='password' value={password} onChange={handleInputChange} type='password' placeholder='Password' />
      </LabelInput>

      {!checkLogin && <AlertNotification />}

      <Button onClick={handleLogUser} variant='blue'>
        Log In
      </Button>
    </>
  );
};
