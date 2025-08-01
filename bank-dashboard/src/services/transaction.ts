// Constants
import { API_ENDPOINT, ERROR_MESSAGES } from '@/constants';

// Types
import { TransactionInfo } from '@/types';

// Services
import { apiClient, FailedResponse, SuccessResponse } from './apiRequest';

export const getTransactionList = async (
  page: number = 1,
  limit: number,
): Promise<SuccessResponse<TransactionInfo[]> | FailedResponse> => {
  try {
    const { data, error } = await apiClient.get<TransactionInfo[]>(
      `${API_ENDPOINT.TRANSACTIONS}?_page=${page}&_limit=${limit}`,
    );

    if (error) {
      return {
        data: null,
        error: error,
      };
    }

    return {
      data: data || [],
      error: '',
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : ERROR_MESSAGES.ERROR_TO_FETCH_API;

    return {
      data: null,
      error: errorMessage,
    };
  }
};
