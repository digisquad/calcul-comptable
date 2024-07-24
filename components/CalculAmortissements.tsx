"use client";

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function CalculAmortissements() {
  const [valeurAcquisition, setValeurAcquisition] = useState(0);
  const [valeurResiduelle, setValeurResiduelle] = useState(0);
  const [dureeAmortissement, setDureeAmortissement] = useState(0);
  const [amortissementAnnuel, setAmortissementAnnuel] = useState(0);

  const calculerAmortissement = () => {
    const amortissement = (valeurAcquisition - valeurResiduelle) / dureeAmortissement;
    setAmortissementAnnuel(amortissement);
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Gestion des Amortissements</h2>
      <div className="mb-4">
        <Label htmlFor="valeurAcquisition" className="block text-gray-700 text-sm font-bold mb-2">Valeur d'Acquisition (MAD)</Label>
        <Input 
          id="valeurAcquisition" 
          type="number" 
          value={valeurAcquisition} 
          onChange={(e) => setValeurAcquisition(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="valeurResiduelle" className="block text-gray-700 text-sm font-bold mb-2">Valeur Résiduelle (MAD)</Label>
        <Input 
          id="valeurResiduelle" 
          type="number" 
          value={valeurResiduelle} 
          onChange={(e) => setValeurResiduelle(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="dureeAmortissement" className="block text-gray-700 text-sm font-bold mb-2">Durée d'Amortissement (années)</Label>
        <Input 
          id="dureeAmortissement" 
          type="number" 
          value={dureeAmortissement} 
          onChange={(e) => setDureeAmortissement(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button 
          type="button" 
          onClick={calculerAmortissement}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer Amortissement
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Amortissement Annuel (MAD): <span className="font-bold">{amortissementAnnuel}</span></p>
      </div>
    </form>
  );
}

export default CalculAmortissements;
