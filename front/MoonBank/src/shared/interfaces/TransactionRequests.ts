export interface DepositRequest {
  typeTransaction: 0;
  typeDeposit: 0;
  amount: number;
  destinationAccountCBU_CVU: string;
}

export interface PayRequest {
  typeTransaction: 1;
  idSourceAccount: number;
  idService: number;
  destinationAccountCBU_CVU: string;

}

export interface TransferRequest {
  typeTransaction: 2;
  sourceAccountCBU_CVU: string;
  destinationAccountCBU_CVU: string;
  Amount: number;
  destinationAccountAlias: string;
}

export interface RedeemRewardRequest {
  typeTransaction: 3;
  destinationAccountAlias: string;
  idReward: number;
}
