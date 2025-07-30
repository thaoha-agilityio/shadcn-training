export const FORM_VALIDATION_MESSAGE = {
  REQUIRED: (item: string) => `${item} must not be empty.`,
  ALL_WHITE_SPACE: (item: string) => `${item} cannot contain only whitespace.`,
  INVALID: (item: string) => `${item} is invalid. Please try again.`,
  MIN_LENGTH: (item: string, min: number) =>
    `${item} must be at least ${min} characters.`,
  MAX_LENGTH: (item: string, max: number) =>
    `${item} must be less than ${max} characters.`,
  PASSWORD_NOT_MATCH: 'Password does not match',
  DATE_OF_BIRTH_INVALID: 'Date of birth must be at least 18 years old.',
};

export const ERROR_MESSAGES = {
  ERROR_TO_FETCH_API: 'Error to fetch API',
  UPDATE: (item: string) =>
    `An unexpected error occurred when updating ${item}.`,
  LOGIN: 'An unexpected error occurred in the login request',
};
