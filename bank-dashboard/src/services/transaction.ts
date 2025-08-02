// Constants
import { API_ENDPOINT, ERROR_MESSAGES } from '@/constants';

// Types
import { TransactionInfo } from '@/types';

// Services
import { apiClient, FailedResponse, SuccessResponse } from './apiRequest';

type SuccessResponseWithHeaders = SuccessResponse<TransactionInfo[]> & {
  totalCount?: number;
};

export const getTransactionList = async (
  page: number = 1,
  limit: number,
): Promise<
  SuccessResponseWithHeaders | (FailedResponse & { totalCount?: number })
> => {
  try {
    const { data, error, headers } = await apiClient.get<TransactionInfo[]>(
      `${API_ENDPOINT.TRANSACTIONS}?_page=${page}&_limit=${limit}`,
    );

    if (error) {
      return {
        data: null,
        error: error,
        totalCount: 0,
      };
    }

    return {
      data: data || [],
      error: '',
      totalCount: Number(headers?.get('X-Total-Count')),
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : ERROR_MESSAGES.ERROR_TO_FETCH_API;

    return {
      data: null,
      error: errorMessage,
      totalCount: 0,
    };
  }
};
