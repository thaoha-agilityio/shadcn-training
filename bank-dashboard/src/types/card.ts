import { TransactionInfo } from './transaction';

export interface CardInfo {
  id: string;
  userId: string;
  balance: number;
  income: number;
  expense: number;
  save: number;
  cardHolderName: string;
  validThru: string;
  transactions: TransactionInfo[];
}
