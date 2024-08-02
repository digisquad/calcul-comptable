"use client";
import { ChangeEvent } from 'react';
import Decimal from 'decimal.js';
import { Button } from "./ui/Form/Button/button";
import { InputWithLabel } from './ui/Form/InputWithLabel/InputWithLabel';
import { useDecimalArray } from '@/components/hooks/useDecimalArray';
import { useDecimalInput } from '@/components/hooks/useDecimalInput';
import { calculateTotal } from '@/components/helpers';

interface DecimalArrayInputProps {
  values: Decimal[];
  onChange: (index: number, value: string) => void;
  label: string;
  addNewItem: () => void;
}

const DecimalArrayInput = ({ values, onChange, label, addNewItem }: DecimalArrayInputProps) => (
  <div className="mb-4">
    {values.map((value, index) => (
      <InputWithLabel
        key={index}
        id={`${label.toLowerCase().replace(/\s+/g, '-')}-${index}`}
        type="number"
        value={value.toString()}
        onChange={(e) => onChange(index, e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        label={label}
      />
    ))}
    <Button
      type="button"
      onClick={addNewItem}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Ajouter
    </Button>
  </div>
);

const SuiviDepensesRevenus = () => {
  const [depenses, handleDepenseChange, addDepense] = useDecimalArray();
  const [revenus, handleRevenuChange, addRevenu] = useDecimalArray();
  const [totalDepenses, handleTotalDepensesChange] = useDecimalInput();
  const [totalRevenus, handleTotalRevenusChange] = useDecimalInput();

  const calculerTotaux = () => {
    handleTotalDepensesChange({ target: { value: calculateTotal(depenses).toString() } } as ChangeEvent<HTMLInputElement>);
    handleTotalRevenusChange({ target: { value: calculateTotal(revenus).toString() } } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Suivi des Dépenses et Revenus</h2>
      <DecimalArrayInput
        values={depenses}
        onChange={handleDepenseChange}
        label="Liste des Dépenses (MAD)"
        addNewItem={addDepense}
      />
      <DecimalArrayInput
        values={revenus}
        onChange={handleRevenuChange}
        label="Liste des Revenus (MAD)"
        addNewItem={addRevenu}
      />
      <div className="flex items-center justify-between">
        <Button 
          type="button" 
          onClick={calculerTotaux}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculer Totaux
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Dépenses Totales (MAD): <span className="font-bold">{totalDepenses.toString()}</span></p>
        <p className="text-gray-700 text-sm">Revenus Totals (MAD): <span className="font-bold">{totalRevenus.toString()}</span></p>
      </div>
    </form>
  );
}

export default SuiviDepensesRevenus;
