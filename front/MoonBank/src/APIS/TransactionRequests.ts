import { DepositRequest, PayRequest, RedeemRewardRequest, TransferRequest } from '../shared/interfaces';
import MoonApi from './Axios';

export const MakeDeposit = async (depositReq: DepositRequest) => {
  try {
     await MoonApi.post('Transactions/MakeTransaction', depositReq);
     
  }
  catch (error) {
    console.log(error)
  }

};

export const PayService = async (payReq: PayRequest) => {

  try {
    await MoonApi.post('Transactions/MakeTransaction', payReq);
  } catch (error) {
    console.log(error)
  }
 
};

export const MakeTransfer = async (transferReq: TransferRequest) => {
try {
  await MoonApi.post('Transactions/MakeTransaction', transferReq);
} catch (error) {
  console.log(error)
}

 
};

export const RedeemReward = async (redeemReq: RedeemRewardRequest) => {
  try {
    await MoonApi.post('Transactions/MakeTransaction', redeemReq);

  } catch (error) {
    console.log(error)

  } 
  };
  