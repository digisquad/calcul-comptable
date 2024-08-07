import { useState, ChangeEvent } from "react";
import Decimal from "decimal.js";

export const useDecimalInput = (): [Decimal, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<Decimal>(new Decimal(0));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Handle empty input or invalid values
    try {
      // If the input is empty, set value to 0
      if (inputValue.trim() === "") {
        setValue(new Decimal(0));
      } else {
        setValue(new Decimal(inputValue));
      }
    } catch (error) {
      console.error("Invalid decimal input:", error);
      // Optionally, you could set a default value or handle the error in some other way
      setValue(new Decimal(0));
    }
  };

  return [value, handleChange];
};
