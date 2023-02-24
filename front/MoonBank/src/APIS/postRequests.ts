import { Login } from '../shared/interfaces';
import MoonApi from './Axios';

export const logUser = async (userData: Login) => {
  return await MoonApi.post('Accounts/Login ', userData);
};
