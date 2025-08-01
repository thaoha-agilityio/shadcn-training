// Constants
import { API_ENDPOINT, ERROR_MESSAGES } from '@/constants';

// Types
import { CardInfo } from '@/types';

// Services
import { apiClient, FailedResponse, SuccessResponse } from './apiRequest';

export const getCardDetails = async (
  cardId: string,
): Promise<SuccessResponse<CardInfo> | FailedResponse> => {
  try {
    const { data, error } = await apiClient.get(
      `${API_ENDPOINT.CARDS}/${cardId}`,
    );

    if (error) {
      return {
        data: null,
        error: error,
      };
    }

    return {
      data: data as CardInfo,
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
