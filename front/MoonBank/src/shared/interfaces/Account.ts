export interface Account {
  name: string;
  lasName: string;
  email: string;
  alias: string;
  cbU_CVU: string;
  balance: number;
  rewardPoints: number;
  success: boolean;
}

export interface Login {
  email: string;
  password: string;
}
