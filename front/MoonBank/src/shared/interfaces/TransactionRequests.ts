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
  }
  
  export interface TransferRequest {
    typeTransaction: 2;
    Amount: number;
    idSourceAccount: number;
    destinationAccountCBU_CVU: number;
    destinationAccountAlias: string;
  }
  
  export interface RedeemRewardRequest {
    typeTransaction: 3;
    idSourceAccount: string;
    idReward: number;
  }