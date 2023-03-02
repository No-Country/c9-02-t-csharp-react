import { Account, Reward, Service, Transaction } from '../shared/interfaces';

import MoonApi from './Axios';

export const getAccountsList = async (): Promise<Account[]> => {
  const { data } = await MoonApi.get('Accounts/AccountsList');
  return data.result;
};

export const getAccountById = async (id: string): Promise<Account> => {
  const { data } = await MoonApi.get(`Accounts/${id}`);
  return data.result;
};

export const getAccountByCBU = async (CBU: string): Promise<Account> => {
  const { data } = await MoonApi.get(`Accounts/CBU_CVU/${CBU}`);
  return data.result;
};
export const getAccountByAlias = async (alias: string): Promise<Account> => {
  const { data } = await MoonApi.get(`Accounts/Alias/${alias}`);
  return data.result;
};

export const getRewardsList = async (): Promise<Reward[]> => {
  const { data } = await MoonApi.get('Rewards/RewardsList ');
  return data.result;
};

export const getServicesList = async (): Promise<Service[]> => {
  const { data } = await MoonApi.get('Services/ServicesList');
  return data.result;
};

export const getTransactionHistory = async (cbu: string): Promise<Transaction[]> => {
  const { data } = await MoonApi.get(`Transactions/TransactionHistory/${cbu}`);
  return data.result;
};
