"use client";

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function CalculHTTTC() {
  const [montantHT, setMontantHT] = useState(0);
  const [tauxTVA, setTauxTVA] = useState(20);
  const [totalTTC, setTotalTTC] = useState(0);

  const calculerTTC = () => {
    const ttc = montantHT * (1 + tauxTVA / 100);
    setTotalTTC(ttc);
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calcul des Totaux HT et TTC</h2>
      <div className="mb-4">
        <Label htmlFor="montantHT" className="block text-gray-700 text-sm font-bold mb-2">Montant HT (MAD)</Label>
        <Input 
          id="montantHT" 
          type="number" 
          value={montantHT} 
          onChange={(e) => setMontantHT(Number(e.target.value))}
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
