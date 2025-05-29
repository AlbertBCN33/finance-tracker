import { FormValidationType } from '@finance-tracker/models';

const formatValidationMessage = (key: string) =>
  Object.keys(FormValidationType).indexOf(key) !== 1
    ? `VALIDATIONS_MSG.${key}`
    : key;

export const FormUtils = {
  formatValidationMessage,
};
