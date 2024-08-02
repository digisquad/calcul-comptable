"use client";

import { Button } from "./ui/Form/Button/button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";
import { useFormInput } from '@/components/hooks/useFormInput';
import { calculerTTC } from '@/components/helpers';

interface Values {
  montantHT: number;
  tauxTVA: number;
  totalTTC: number;
}

const CalculHTTTC = () => {
  const [values, handleChange, setValues] = useFormInput<Values>({
    montantHT: 0,
    tauxTVA: 20,
    totalTTC: 0
  });

  const calculate = () => {
    const totalTTC = calculerTTC(values);
    setValues(prev => ({ ...prev, totalTTC }));
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Totaux HT et TTC</h2>
      <div className="mb-4">
        <InputWithLabel 
          id="montantHT" 
          name = "montantHT"
          label="Montant HT (MAD)"
          type="number" 
          value={values.montantHT.toString()} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="tauxTVA" 
          name = "tauxTVA"
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
          Calculer TTC
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Total TTC (MAD): <span className="font-bold">{values.totalTTC}</span></p>
      </div>
    </form>
  );
}

export default CalculHTTTC;
