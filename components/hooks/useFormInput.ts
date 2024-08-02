// hooks/useFormInput.ts

import { useState, ChangeEvent } from 'react';

const handleInputChange = <T,>(
  event: ChangeEvent<HTMLInputElement>,
  setValues: React.Dispatch<React.SetStateAction<T>>
) => {
  const { name, value } = event.target;
  setValues(prev => ({
    ...prev,
    [name]: value
  }));
};

// Custom hook to manage form input values
const useFormInput = <T,>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, setValues);

  return [values, handleChange, setValues] as const;
};

export { useFormInput };
