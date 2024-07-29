"use client";

import { useState } from 'react';
import Decimal from 'decimal.js';
import { Button } from "./ui/Form/Button/Button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";  

const CalculHTTTC = () => {
  const [montantHT, setMontantHT] = useState<number>(0);
  const [tauxTVA, setTauxTVA] = useState<number>(20);
  const [totalTTC, setTotalTTC] = useState<number>(0);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value));
  };

  const calculerTTC = () => {
    const montantHTDecimal = new Decimal(montantHT);
    const tauxTVADecimal = new Decimal(tauxTVA);
    const ttc = montantHTDecimal.times(new Decimal(1).plus(tauxTVADecimal.dividedBy(100))).toDecimalPlaces(2);

    setTotalTTC(ttc.toNumber());
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Totaux HT et TTC</h2>
      <div className="mb-4">
        <InputWithLabel 
          id="montantHT" 
          label="Montant HT (MAD)"
          type="number" 
          value={montantHT.toString()} 
          onChange={handleInputChange(setMontantHT)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="tauxTVA" 
          label="Taux de TVA (%)"
          type="number" 
          value={tauxTVA.toString()} 
          onChange={handleInputChange(setTauxTVA)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button 
          type="button" 
          onClick={calculerTTC}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer TTC
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Total TTC (MAD): <span className="font-bold">{totalTTC}</span></p>
      </div>
    </form>
  );
}

export default CalculHTTTC;
