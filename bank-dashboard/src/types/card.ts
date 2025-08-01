export interface CardInfo {
  id: string;
  userId: string;
  balance: number;
  income: number;
  expense: number;
  save: number;
  cardNumber: string;
  cardHolderName: string;
  validThru: string;
  transactionIds: string[];
}
