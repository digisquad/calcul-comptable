// hooks/useDecimalInput.ts

import { useState, ChangeEvent } from 'react';
import Decimal from 'decimal.js';

const handleDecimalInputChange = (
  event: ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<Decimal>>
) => {
  const { value } = event.target;
  setValue(new Decimal(value));
};

const useDecimalInput = (initialValue: Decimal = new Decimal(0)) => {
  const [value, setValue] = useState<Decimal>(initialValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => handleDecimalInputChange(event, setValue);

  return [value, handleChange] as const;
};

export { useDecimalInput };
