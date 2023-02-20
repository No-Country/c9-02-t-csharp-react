import { TypeDeposit, TypeTransaction } from '../enum';

export interface Transaction {
  id: number;
  typeTransaction: TypeTransaction;
  typeDeposit: TypeDeposit;
  date: string;
  amount: number;
  idSourceAccount: number;
  idDestinationAccount: number;
  idReward: number;
}
