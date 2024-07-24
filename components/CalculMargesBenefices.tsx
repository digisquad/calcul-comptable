"use client";

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function CalculMargesBenefices() {
  const [chiffreAffaires, setChiffreAffaires] = useState(0);
  const [coutVentes, setCoutVentes] = useState(0);
  const [margeBrute, setMargeBrute] = useState(0);
  const [margeNette, setMargeNette] = useState(0);

  const calculerMarge = () => {
    const margeB = chiffreAffaires - coutVentes;
    setMargeBrute(margeB);
    setMargeNette((margeB / chiffreAffaires) * 100);
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Marges et Bénéfices</h2>
      <div className="mb-4">
        <Label htmlFor="chiffreAffaires" className="block text-gray-700 text-sm font-bold mb-2">Chiffre d&apos;Affaires (MAD)</Label>
        <Input 
          id="chiffreAffaires" 
          type="number" 
          value={chiffreAffaires} 
          onChange={(e) => setChiffreAffaires(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="coutVentes" className="block text-gray-700 text-sm font-bold mb-2">Coût des Ventes (MAD)</Label>
        <Input 
          id="coutVentes" 
          type="number" 
          value={coutVentes} 
          onChange={(e) => setCoutVentes(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        <p className="text-gray-700 text-sm">Marge Brute (MAD): <span className="font-bold">{margeBrute}</span></p>
        <p className="text-gray-700 text-sm">Marge Nette (%): <span className="font-bold">{margeNette.toFixed(2)}</span></p>
      </div>
    </form>
  );
}

export default CalculMargesBenefices;
