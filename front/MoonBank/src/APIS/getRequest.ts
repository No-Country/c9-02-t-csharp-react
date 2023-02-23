import MoonApi from './Axios';
import { Account } from '../shared/interfaces/Account';

export const getAccountsList = async (): Promise<Account[]> => {
  return await MoonApi.get('Accounts/AccountsList');
};

export const getRewardsList = async (): Promise<Account[]> => {
  return await MoonApi.get('Rewards/RewardsList ');
};

export const getServicesList = async (): Promise<Account[]> => {
  return await MoonApi.get('Services/ServicesList ');
};
