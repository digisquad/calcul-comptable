// hooks/useDecimalInput.ts

import { useFormInput } from './useFormInput';
import Decimal from 'decimal.js';

const useDecimalInput = (initialValue: Decimal = new Decimal(0)) => {
  const [formValues, handleChange] = useFormInput({ value: initialValue }, value => new Decimal(value));
  return [formValues.value, handleChange] as const;
};

export { useDecimalInput };
