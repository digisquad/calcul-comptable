"use client";

import { useState } from 'react';
import { Button } from "./ui/Form/Button/Button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";  

const CalculAmortissements = () => {
  const [valeurAcquisition, setValeurAcquisition] = useState<number>(0);
  const [valeurResiduelle, setValeurResiduelle] = useState<number>(0);
  const [dureeAmortissement, setDureeAmortissement] = useState<number>(0);
  const [amortissementAnnuel, setAmortissementAnnuel] = useState<number>(0);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value));
  };

  const calculerAmortissement = () => {
    const amortissement = (valeurAcquisition - valeurResiduelle) / dureeAmortissement;
    setAmortissementAnnuel(amortissement);
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Gestion des Amortissements</h2>
      <div className="mb-4">
        <InputWithLabel 
          id="valeurAcquisition" 
          label="Valeur d'Acquisition (MAD)" 
          type="number" 
          value={valeurAcquisition.toString()} 
          onChange={handleInputChange(setValeurAcquisition)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="valeurResiduelle" 
          label="Valeur Résiduelle (MAD)" 
          type="number" 
          value={valeurResiduelle.toString()} 
          onChange={handleInputChange(setValeurResiduelle)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="dureeAmortissement" 
          label="Durée d'Amortissement (années)" 
          type="number" 
          value={dureeAmortissement.toString()} 
          onChange={handleInputChange(setDureeAmortissement)}
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
