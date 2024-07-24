"use client";

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function CalculSalaires() {
  const [salaireBrut, setSalaireBrut] = useState(0);
  const [cotisationsSociales, setCotisationsSociales] = useState(0);
  const [salaireNet, setSalaireNet] = useState(0);

  const calculerSalaireNet = () => {
    setSalaireNet(salaireBrut - cotisationsSociales);
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Salaires Net et Brut</h2>
      <div className="mb-4">
        <Label htmlFor="salaireBrut" className="block text-gray-700 text-sm font-bold mb-2">Salaire Brut (MAD)</Label>
        <Input 
          id="salaireBrut" 
          type="number" 
          value={salaireBrut} 
          onChange={(e) => setSalaireBrut(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="cotisationsSociales" className="block text-gray-700 text-sm font-bold mb-2">Cotisations Sociales (MAD)</Label>
        <Input 
          id="cotisationsSociales" 
          type="number" 
          value={cotisationsSociales} 
          onChange={(e) => setCotisationsSociales(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button 
          type="button" 
          onClick={calculerSalaireNet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer Salaire Net
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Salaire Net (MAD): <span className="font-bold">{salaireNet}</span></p>
      </div>
    </form>
  );
}

export default CalculSalaires;
