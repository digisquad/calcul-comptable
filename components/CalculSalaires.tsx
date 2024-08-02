"use client";

import { Button } from "./ui/Form/Button/button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";
import { useFormInput } from '@/components/hooks/useFormInput';
import { calculerSalaireNet } from '@/components/helpers';
import Decimal from 'decimal.js';

interface SalaryValues {
  salaireBrut: Decimal;
  cotisationsSociales: Decimal;
  salaireNet: Decimal;
}

const CalculSalaires = () => {
  const [values, handleChange, setValues] = useFormInput<SalaryValues>({
    salaireBrut: new Decimal(0),
    cotisationsSociales: new Decimal(0),
    salaireNet: new Decimal(0)
  });

  const calculate = () => {
    const salaireNet = calculerSalaireNet(values);
    setValues(prev => ({ ...prev, salaireNet }));
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Salaires Net et Brut</h2>
      <div className="mb-4">
        <InputWithLabel 
          id="salaireBrut" 
          label="Salaire Brut (MAD)" 
          type="number" 
          value={values.salaireBrut.toString()} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="cotisationsSociales" 
          label="Cotisations Sociales (MAD)" 
          type="number" 
          value={values.cotisationsSociales.toString()} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button 
          type="button" 
          onClick={calculate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer Salaire Net
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Salaire Net (MAD): <span className="font-bold">{values.salaireNet.toString()}</span></p>
      </div>
    </form>
  );
}

export default CalculSalaires;
