"use client";

import { useState, ChangeEvent } from 'react';
import Decimal from 'decimal.js';
import { Button } from "./ui/Form/Button/Button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";  

const CalculTVA = () => {
  const [totalTTC, setTotalTTC] = useState<number>(0);
  const [tauxTVA, setTauxTVA] = useState<number>(20);
  const [montantTVA, setMontantTVA] = useState<number>(0);
  const [totalHT, setTotalHT] = useState<number>(0);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value));
  };

  const calculerTVA = () => {
    const totalTTCDecimal = new Decimal(totalTTC);
    const tauxTVADecimal = new Decimal(tauxTVA);
    const divisor = new Decimal(100).plus(tauxTVADecimal);
    const tva = totalTTCDecimal.times(tauxTVADecimal).dividedBy(divisor).toDecimalPlaces(2);
    const totalHT = totalTTCDecimal.minus(tva).toDecimalPlaces(2);

    setMontantTVA(tva.toNumber());
    setTotalHT(totalHT.toNumber());
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul de la TVA</h2>
      <div className="mb-4">
        <InputWithLabel 
          id="totalTTC" 
          label="Total TTC (MAD)" 
          type="number" 
          value={totalTTC.toString()} 
          onChange={handleInputChange(setTotalTTC)}
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
          onClick={calculerTVA}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer TVA
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Montant de la TVA (MAD): <span className="font-bold">{montantTVA}</span></p>
        <p className="text-gray-700 text-sm">Total HT (MAD): <span className="font-bold">{totalHT}</span></p>
      </div>
    </form>
  );
}

export default CalculTVA;
