export enum TRANSACTION_STATUS {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export interface TransactionInfo {
  transactionId: string;
  amount: number;
  description: string;
  date: string;
  cardId: string;
  status: TRANSACTION_STATUS;
  senderId: string;
  receiverId: string;
}
