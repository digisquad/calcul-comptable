import { useState } from 'react';
import Decimal from 'decimal.js';

const handleDecimalArrayInputChange = (
  index: number,
  value: string,
  setValues: React.Dispatch<React.SetStateAction<Decimal[]>>
) => {
  setValues(prevValues => {
    const newValues = [...prevValues];
    newValues[index] = new Decimal(value);
    return newValues;
  });
};

const useDecimalArray = (initialValue: Decimal[] = [new Decimal(0)]) => {
  const [values, setValues] = useState<Decimal[]>(initialValue);

  const handleChange = (index: number, value: string) => handleDecimalArrayInputChange(index, value, setValues);

  const addNewItem = () => {
    setValues(prevValues => [...prevValues, new Decimal(0)]);
  };

  return [values, handleChange, addNewItem] as const;
};

export { useDecimalArray };
