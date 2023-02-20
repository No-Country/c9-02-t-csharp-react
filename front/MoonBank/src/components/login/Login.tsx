import { useForm } from '../../shared/hooks/useForm';

export const Login = () => {
  const { ResetForm, userName, password, confPassword, handleInputChange } = useForm({
    userName: 'nocountry',
    password: '123456',
    confPassword: '123456',
  });
  return (
    <div>
      <form>
        <input type='text' name='userName' />
        <input type='text' name='password' />
      </form>
    </div>
  );
};
