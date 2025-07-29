import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormClearErrors,
} from 'react-hook-form';

/**
 * Clear error message when the users typing
 */
export const clearErrorOnChange = <T extends FieldValues>(
  fieldName: Path<T>,
  errors: FieldErrors<T>,
  clearErrorFunc: UseFormClearErrors<T>,
): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  errors[fieldName]?.message && clearErrorFunc(fieldName);
};
