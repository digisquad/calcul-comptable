import { useState, ChangeEvent } from 'react';

const handleInputChange = <T,>(
  event: ChangeEvent<HTMLInputElement>,
  setValues: React.Dispatch<React.SetStateAction<T>>,
  transform?: (value: string) => any
) => {
  const { name, value } = event.target;
  setValues(prev => ({
    ...prev,
    [name]: transform ? transform(value) : value
  }));
};

const useFormInput = <T,>(initialValues: T, transform?: (value: string) => any) => {
  const [values, setValues] = useState<T>(initialValues);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, setValues, transform);

  return [values, handleChange, setValues] as const;
};

export { useFormInput };
