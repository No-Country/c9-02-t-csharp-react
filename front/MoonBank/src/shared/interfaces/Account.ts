export interface Account {
  id: number;
  name: string;
  lasName: string;
  email: string;
  password: string;
  alias: string;
  cbu_cvu: number;
  balance: number;
  rewardPoints: number;
}

export interface Login {
  email: 'string';
  password: 'string';
}