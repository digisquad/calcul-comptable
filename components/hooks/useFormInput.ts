import { useState, ChangeEvent } from 'react';
import Decimal from 'decimal.js';

const handleInputChange = <T,>(
  event: ChangeEvent<HTMLInputElement>,
  setValues: React.Dispatch<React.SetStateAction<T>>,
  transform?: (value: string) => any
) => {
  const { name, value } = event.target;
  try {
    const decimalValue = new Decimal(value);
    if (!decimalValue.isNaN() && decimalValue.greaterThanOrEqualTo(0)) {
      setValues(prev => ({
        ...prev,
        [name]: transform ? transform(value) : value
      }));
    }
  } catch (e) {
    // Handle invalid Decimal input
    console.error("Invalid decimal input:", e);
  }
};

const useFormInput = <T,>(initialValues: T, transform?: (value: string) => any) => {
  const [values, setValues] = useState<T>(initialValues);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, setValues, transform);

  return [values, handleChange, setValues] as const;
};

export { useFormInput };
