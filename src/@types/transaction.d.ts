export interface ITransaction {
  subject: string;
  amount: string;
  id: string;
}

export interface ApplicationState {
  transactions: ITransaction[];
  error?: string;
  addTransaction?(transaction: ITransaction): void;
  deleteTransaction?(id: string): void;
  loading: boolean;
}
