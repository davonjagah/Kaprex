export interface IUserPool {
  userKSOLBalance: number;
  userSOLBalance: number;
  conversionRate: number;
}

export interface IStakePoolStats {
  conversionRate: number;
  totalStakedSOL: number;
  totalKSOLSupply: number;
  solPrice: number;
}
