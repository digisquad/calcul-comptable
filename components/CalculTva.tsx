"use client";

import { useState, ChangeEvent } from 'react';
import Decimal from 'decimal.js';
import { Button } from "./ui/Form/Button/button";
import { Input } from "./ui/Form/Input/input";
import { Label } from "./ui/Form/Label/label";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, value, onChange }) => (
  <div className="mb-4">
    <Label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
);

const CalculTVA: React.FC = () => {
  const [totalTTC, setTotalTTC] = useState<number>(0);
  const [tauxTVA, setTauxTVA] = useState<number>(20);
  const [montantTVA, setMontantTVA] = useState<number>(0);
  const [totalHT, setTotalHT] = useState<number>(0);

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
      <InputField 
        id="totalTTC" 
        label="Total TTC (MAD)" 
        type="number" 
        value={totalTTC} 
        onChange={(e) => setTotalTTC(Number(e.target.value))}
      />
      <InputField 
        id="tauxTVA" 
        label="Taux de TVA (%)" 
        type="number" 
        value={tauxTVA} 
        onChange={(e) => setTauxTVA(Number(e.target.value))}
      />
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
