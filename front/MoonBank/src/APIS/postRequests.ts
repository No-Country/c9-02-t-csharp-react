import { Login } from '../shared/interfaces';
import MoonApi from './Axios';

export const logUser = async (userData: Login) => {
  try {
    
    return await MoonApi.post('Accounts/Login ', userData);
  } catch (error) {
    console.log(error)
  }
};
