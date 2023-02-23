import { DepositRequest, PayRequest, RedeemRewardRequest, TransferRequest } from '../shared/interfaces';
import MoonApi from './Axios';

export const MakeDeposit = async (depositReq: DepositRequest) => {
  await MoonApi.post('api/Transactions/MakeTransaction', depositReq);
};

export const PayService = async (payReq: PayRequest) => {
  await MoonApi.post('api/Transactions/MakeTransaction', payReq);
};

export const MakeTransfer = async (transferReq: TransferRequest) => {
  await MoonApi.post('api/Transactions/MakeTransaction', transferReq);
};

export const RedeemReward = async (redeemReq: RedeemRewardRequest) => {
    await MoonApi.post('api/Transactions/MakeTransaction', redeemReq);
  };
  