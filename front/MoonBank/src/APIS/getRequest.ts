import { Account } from '../shared/interfaces/Account';
import MoonApi from './Axios';
import { Service } from '../shared/interfaces';
import { Reward } from '../shared/interfaces/Reward';

export const getAccountsList = async (): Promise<Account[]> => {
  const { data } = await MoonApi.get('Accounts/AccountsList');
  return data.result 
};

export const getAccountByAlias = async (alias:string): Promise<Account> => {
  const { data } = await MoonApi.get(`Accounts/Alias/${alias}`);
  return data.result 
};

export const getRewardsList = async (): Promise<Reward[]> => {
  const { data } = await MoonApi.get('Rewards/RewardsList ');
  return data.result
};

export const getServicesList = async (): Promise<Service[]> => {
  const { data } = await MoonApi.get('Services/ServicesList');
  return data.result
};
