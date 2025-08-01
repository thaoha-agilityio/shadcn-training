import { TRANSACTION_STATUS, TransactionInfo } from '@/types';

export const TRANSACTIONS: TransactionInfo[] = [
  {
    transactionId: '1111111111',
    amount: 100,
    description: 'Spotify Subscription',
    date: '28 Jan, 12.30 AM',
    cardId: '12341234444',
    status: TRANSACTION_STATUS.COMPLETED,
    senderId: '123',
    receiverId: '123',
    type: 'payment',
  },
  {
    transactionId: '2',
    amount: 100,
    description: 'string',
    date: '28 Jan, 12.30 AM',
    cardId: 'string',
    status: TRANSACTION_STATUS.COMPLETED,
    senderId: '123',
    receiverId: '123',
    type: 'payment',
  },
  {
    transactionId: '3',
    amount: 100,
    description: 'string',
    date: '28 Jan, 12.30 AM',
    cardId: 'string',
    status: TRANSACTION_STATUS.COMPLETED,
    senderId: '123',
    receiverId: '123',
    type: 'payment',
  },
];
