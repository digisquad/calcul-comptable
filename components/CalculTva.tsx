"use client";

import { Button } from "./ui/Form/Button/button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";
import { useFormInput } from '@/components/hooks/useFormInput';
import { calculerTVA } from '@/components/helpers';

interface TVAValues {
  totalTTC: number;
  tauxTVA: number;
  montantTVA: number;
  totalHT: number;
}

const CalculTVA = () => {
  const [values, handleChange, setValues] = useFormInput<TVAValues>({
    totalTTC: 0,
    tauxTVA: 20,
    montantTVA: 0,
    totalHT: 0
  });

  const calculate = () => {
    const result = calculerTVA(values);
    setValues(prevState => ({ ...prevState, ...result }));
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul de la TVA</h2>
      <div className="mb-4">
        <InputWithLabel 
          id="totalTTC" 
          name = "totalTTC"
          label="Total TTC (MAD)" 
          type="number" 
          value={values.totalTTC.toString()} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="tauxTVA" 
          label="Taux de TVA (%)" 
          type="number" 
          value={values.tauxTVA.toString()} 
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
          Calculer TVA
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Montant de la TVA (MAD): <span className="font-bold">{values.montantTVA}</span></p>
        <p className="text-gray-700 text-sm">Total HT (MAD): <span className="font-bold">{values.totalHT}</span></p>
      </div>
    </form>
  );
}

export default CalculTVA;
