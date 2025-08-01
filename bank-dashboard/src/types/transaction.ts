export enum TRANSACTION_STATUS {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export interface TransactionInfo {
  id: string;
  amount: number;
  description: string;
  createdAt: string;
  cardId: string;
  status: TRANSACTION_STATUS;
  senderId: string;
  receiverId: string;
  type?: 'payment' | 'transfer';
}
