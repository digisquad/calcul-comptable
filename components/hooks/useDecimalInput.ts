// to do : fix using the useFormInput hook because it does result in state not updating properly.

/*
import { useFormInput } from './useFormInput';
import Decimal from 'decimal.js';

const useDecimalInput = (initialValue: Decimal = new Decimal(0)) => {
  const [formValues, handleChange] = useFormInput({ value: initialValue }, value => new Decimal(value));
  return [formValues.value, handleChange] as const;
};

export { useDecimalInput };
*/


import { useState, ChangeEvent } from "react"
import Decimal from "decimal.js"

export const useDecimalInput = (): [Decimal, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<Decimal>(new Decimal(0))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setValue(new Decimal(inputValue))
  }

  return [value, handleChange]
}

