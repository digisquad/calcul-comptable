'use client';

import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import CalculTVA from "@/components/CalculTva";
import CalculHTTTC from "@/components/CalculHTTTC";
import CalculMargesBenefices from "@/components/CalculMargesBenefices";
import CalculAmortissements from "@/components/CalculAmortissements";
import SuiviDepensesRevenus from "@/components/SuiviDepensesRevenus";
import CalculSalaires from "@/components/CalculSalaires";

const componentMap = {
  CalculTVA,
  CalculHTTTC,
  CalculMargesBenefices,
  CalculAmortissements,
  SuiviDepensesRevenus,
  CalculSalaires,
};

export type ComponentKey = keyof typeof componentMap;

const FormContainer: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentKey>('CalculTVA');

  const ActiveComponent = componentMap[activeComponent];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <nav className="w-full md:w-64 bg-white shadow-md">
        <Navigation setActiveComponent={setActiveComponent} />
      </nav>
      <main className="flex-grow p-4 md:p-8 bg-white shadow-md">
        <div className="max-w-3xl mx-auto">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
};

export default FormContainer;
