"use client";

import { Button } from "@/components/ui/Form/Button/button";
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel";
import { calculerAmortissement } from '@/components/helpers';
import { useFormInput } from '@/components/hooks/useFormInput';


interface Values {
  valeurAcquisition: number;
  valeurResiduelle: number;
  dureeAmortissement: number;
  amortissementAnnuel: number;
}

const CalculAmortissements = () => {
  const [values, handleChange, setValues] = useFormInput({
    valeurAcquisition: 0,
    valeurResiduelle: 0,
    dureeAmortissement: 0,
    amortissementAnnuel: 0,
  });

  const handleCalculerAmortissement = () => {
    const amortissement = calculerAmortissement(
      values.valeurAcquisition,
      values.valeurResiduelle,
      values.dureeAmortissement
    );
    setValues((prevValues) => ({
      ...prevValues,
      amortissementAnnuel: amortissement.toNumber(),
    }));
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Gestion des Amortissements</h2>
      <div className="mb-4">
        <InputWithLabel 
          id="valeurAcquisition" 
          label="Valeur d'Acquisition (MAD)" 
          type="number" 
          value={values.valeurAcquisition.toString()} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="valeurResiduelle"
          label="Valeur Résiduelle (MAD)" 
          type="number" 
          value={values.valeurResiduelle.toString()} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel 
          id="dureeAmortissement"
          label="Durée d'Amortissement (années)" 
          type="number" 
          value={values.dureeAmortissement.toString()} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button 
          type="button" 
          onClick={handleCalculerAmortissement}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer Amortissement
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Amortissement Annuel (MAD): <span className="font-bold">{values.amortissementAnnuel}</span></p>
      </div>
    </form>
  );
}

export default CalculAmortissements;
