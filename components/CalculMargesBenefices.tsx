"use client";

import { useState } from 'react';
import Decimal from 'decimal.js';
import { Button } from "./ui/Form/Button/Button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";  


const CalculMargesBenefices = () => {
  const [chiffreAffaires, setChiffreAffaires] = useState(new Decimal(0));
  const [coutVentes, setCoutVentes] = useState(new Decimal(0));
  const [margeBrute, setMargeBrute] = useState(new Decimal(0));
  const [margeNette, setMargeNette] = useState(new Decimal(0));

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<Decimal>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Decimal(e.target.value);
    setter(value);
  };

  const calculerMarge = () => {
    const margeB = chiffreAffaires.minus(coutVentes);
    setMargeBrute(margeB);
    setMargeNette(margeB.div(chiffreAffaires).times(100));
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Marges et Bénéfices</h2>
      <div className="mb-4">
        <InputWithLabel
          id="chiffreAffaires" 
          type="number" 
          value={chiffreAffaires.toString()} 
          onChange={handleInputChange(setChiffreAffaires)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          label = "Chiffre d'Affaires (MAD)"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel
          id="coutVentes" 
          type="number" 
          value={coutVentes.toString()} 
          onChange={handleInputChange(setCoutVentes)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          label = "Coût des Ventes (MAD)"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button 
          type="button" 
          onClick={calculerMarge}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer Marge
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Marge Brute (MAD): <span className="font-bold">{margeBrute.toString()}</span></p>
        <p className="text-gray-700 text-sm">Marge Nette (%): <span className="font-bold">{margeNette.toFixed(2)}</span></p>
      </div>
    </form>
  );
}

export default CalculMargesBenefices;
