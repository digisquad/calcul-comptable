"use client"

import React, { useState } from "react"
import { useDecimalInput } from "@/components/hooks/useDecimalInput"
import { calculerMarge } from "@/components/helpers"
import Decimal from "decimal.js"
import { ReusableForm } from "@/components/FormDisplay"
import ResultDisplay from "./displayedResult"

interface Result {
  margeBrute: Decimal
  margeNette: Decimal
}

const CalculMargesBenefices: React.FC = () => {
  const [chiffreAffaires, handleChiffreAffairesChange] = useDecimalInput()
  const [coutVentes, handleCoutVentesChange] = useDecimalInput()
  const [result, setResult] = useState<Result>({ margeBrute: new Decimal(0), margeNette: new Decimal(0) })

  const calculate = () => {
    const { margeBrute, margeNette } = calculerMarge({ chiffreAffaires, coutVentes })
    setResult({ margeBrute, margeNette })
  }

  const fields = [
    {
      id: "chiffreAffaires",
      name: "chiffreAffaires",
      label: "Chiffre d'Affaires (MAD)",
      type: "number",
      value: chiffreAffaires.toString(),
      onChange: handleChiffreAffairesChange,
    },
    {
      id: "coutVentes",
      name: "coutVentes",
      label: "Coût des Ventes (MAD)",
      type: "number",
      value: coutVentes.toString(),
      onChange: handleCoutVentesChange,
    },
  ]

  const results = [
    {
      label: "Marge Brute (MAD)",
      value: result.margeBrute.toString(),
    },
    {
      label: "Marge Nette (%)",
      value: result.margeNette.toFixed(2),
    },
  ]

  // Check if all required fields have valid values
  const isFormValid = chiffreAffaires.greaterThan(0) && coutVentes.greaterThan(0)

  return (
    <ReusableForm
      title="Calcul des Marges et Bénéfices"
      fields={fields}
      onSubmit={calculate}
      submitButtonText="Calculer"
      result={<ResultDisplay results={results} />}
      isFormValid={isFormValid} // Pass the form validation state
    />
  )
}

export default CalculMargesBenefices
