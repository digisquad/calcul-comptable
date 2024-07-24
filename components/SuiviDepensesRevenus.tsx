"use client";

import { useState } from 'react';
import Decimal from 'decimal.js';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function SuiviDepensesRevenus() {
  const [depenses, setDepenses] = useState<Decimal[]>([new Decimal(0)]);
  const [revenus, setRevenus] = useState<Decimal[]>([new Decimal(0)]);
  const [totalDepenses, setTotalDepenses] = useState(new Decimal(0));
  const [totalRevenus, setTotalRevenus] = useState(new Decimal(0));

  const handleDepenseChange = (index: number, value: string) => {
    const newDepenses = [...depenses];
    newDepenses[index] = new Decimal(value);
    setDepenses(newDepenses);
  };

  const handleRevenuChange = (index: number, value: string) => {
    const newRevenus = [...revenus];
    newRevenus[index] = new Decimal(value);
    setRevenus(newRevenus);
  };

  const addDepense = () => {
    setDepenses([...depenses, new Decimal(0)]);
  };

  const addRevenu = () => {
    setRevenus([...revenus, new Decimal(0)]);
  };

  const calculerTotaux = () => {
    setTotalDepenses(depenses.reduce((acc, dep) => acc.plus(dep), new Decimal(0)));
    setTotalRevenus(revenus.reduce((acc, rev) => acc.plus(rev), new Decimal(0)));
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Suivi des Dépenses et Revenus</h2>
      <div className="mb-4">
        <Label htmlFor="depenses" className="block text-gray-700 text-sm font-bold mb-2">Liste des Dépenses (MAD)</Label>
        {depenses.map((depense, index) => (
          <Input 
            key={index}
            id={`depense-${index}`}
            type="number"
            value={depense.toString()}
            onChange={(e) => handleDepenseChange(index, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
        <Button type="button" onClick={addDepense} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ajouter Dépense</Button>
      </div>
      <div className="mb-4">
        <Label htmlFor="revenus" className="block text-gray-700 text-sm font-bold mb-2">Liste des Revenus (MAD)</Label>
        {revenus.map((revenu, index) => (
          <Input 
            key={index}
            id={`revenu-${index}`}
            type="number"
            value={revenu.toString()}
            onChange={(e) => handleRevenuChange(index, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
        <Button type="button" onClick={addRevenu} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ajouter Revenu</Button>
      </div>
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
