'use client';

import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/navigation-menu";
import { ComponentKey } from "@/app/page"; // Import the type from the main component

const formComponents = [
  { name: "Calcul TVA", id: "CalculTVA" },
  { name: "Calcul HT/TTC", id: "CalculHTTTC" },
  { name: "Calcul Marges et Bénéfices", id: "CalculMargesBenefices" },
  { name: "Calcul Amortissements", id: "CalculAmortissements" },
  { name: "Suivi Dépenses et Revenus", id: "SuiviDepensesRevenus" },
  { name: "Calcul Salaires", id: "CalculSalaires" },
];

interface NavigationProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<ComponentKey>>;
}

const Navigation: React.FC<NavigationProps> = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 md:p-0">
      <button 
        className="md:hidden w-full text-left py-2 px-4 bg-gray-200 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      <NavigationMenu className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <NavigationMenuList className="flex flex-col md:flex-col">
          {formComponents.map((component) => (
            <NavigationMenuItem key={component.id} className="w-full">
              <NavigationMenuLink 
                onClick={() => {
                  setActiveComponent(component.id as ComponentKey);
                  setIsOpen(false);
                }}
                className="block w-full py-2 px-4 hover:bg-gray-100 cursor-pointer"
              >
                {component.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
