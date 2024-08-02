"use client";

import { useState } from 'react';
import { Button } from "./ui/Form/Button/button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";
import { useDecimalInput } from '@/components/hooks/useDecimalInput';
import { calculerMarge } from '@/components/helpers';
import Decimal from 'decimal.js';

interface Result {
  margeBrute: Decimal;
  margeNette: Decimal;
}

const CalculMargesBenefices = () => {
  const [chiffreAffaires, handleChiffreAffairesChange] = useDecimalInput();
  const [coutVentes, handleCoutVentesChange] = useDecimalInput();
  const [result, setResult] = useState<Result>({ margeBrute: new Decimal(0), margeNette: new Decimal(0) });

  const calculate = () => {
    const { margeBrute, margeNette } = calculerMarge({ chiffreAffaires, coutVentes });
    setResult({ margeBrute, margeNette });
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Marges et Bénéfices</h2>
      <div className="mb-4">
        <InputWithLabel
          id="chiffreAffaires" 
          type="number" 
          value={chiffreAffaires.toString()}
          onChange={handleChiffreAffairesChange}
          label="Chiffre d'Affaires (MAD)"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel
          id="coutVentes" 
          type="number" 
          value={coutVentes.toString()}
          onChange={handleCoutVentesChange}
          label="Coût des Ventes (MAD)"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <Button 
          type="button" 
          onClick={calculate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer
        </Button>
      </div>
      <div>
        <p>Marge Brute: {result.margeBrute.toString()}</p>
        <p>Marge Nette: {result.margeNette.toString()}</p>
      </div>
    </form>
  );
};

export default CalculMargesBenefices;
