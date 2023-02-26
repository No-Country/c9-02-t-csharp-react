import { Account } from '../shared/interfaces/Account';
import MoonApi from './Axios';
import { Service } from '../shared/interfaces';

export const getAccountsList = async (): Promise<Account[]> => {
  const { data } = await MoonApi.get('Accounts/AccountsList');
  return data.result 
};

export const getRewardsList = async (): Promise<Account[]> => {
  const { data } = await MoonApi.get('Rewards/RewardsList ');
  return data.result
};

export const getServicesList = async (): Promise<Service[]> => {
  const { data } = await MoonApi.get('Services/ServicesList');
  return data.result
};
