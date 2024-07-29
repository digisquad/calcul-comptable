"use client";

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function CalculTVA() {
  const [totalTTC, setTotalTTC] = useState(0);
  const [tauxTVA, setTauxTVA] = useState(20);
  const [montantTVA, setMontantTVA] = useState(0);
  const [totalHT, setTotalHT] = useState(0);

  const calculerTVA = () => {
    const tva = (totalTTC * tauxTVA) / (100 + tauxTVA);
    setMontantTVA(tva);
    setTotalHT(totalTTC - tva);
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul de la TVA</h2>
      <div className="mb-4">
        <Label htmlFor="totalTTC" className="block text-gray-700 text-sm font-bold mb-2">Total TTC (MAD)</Label>
        <Input 
          id="totalTTC" 
          type="number" 
          value={totalTTC} 
          onChange={(e) => setTotalTTC(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="tauxTVA" className="block text-gray-700 text-sm font-bold mb-2">Taux de TVA (%)</Label>
        <Input 
          id="tauxTVA" 
          type="number" 
          value={tauxTVA} 
          onChange={(e) => setTauxTVA(Number(e.target.value))}
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
