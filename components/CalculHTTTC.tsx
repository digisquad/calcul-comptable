"use client"

import React from "react"
import { useFormInput } from "@/components/hooks/useFormInput"
import { calculerTTC } from "@/components/helpers"
import { ReusableForm } from "@/components/FormDisplay" // Adjust the import path as needed
import ResultDisplay from "./displayedResult"
interface Values {
  montantHT: number
  tauxTVA: number
  totalTTC: number
}

const CalculHTTTC: React.FC = () => {
  const [values, handleChange, setValues] = useFormInput<Values>({
    montantHT: 0,
    tauxTVA: 20,
    totalTTC: 0,
  })

  const calculate = () => {
    const totalTTC = calculerTTC(values)
    setValues((prev) => ({ ...prev, totalTTC }))
  }

  const fields = [
    {
      id: "montantHT",
      name: "montantHT",
      label: "Montant HT (MAD)",
      type: "number",
      value: values.montantHT.toString(),
      onChange: handleChange,
    },
    {
      id: "tauxTVA",
      name: "tauxTVA",
      label: "Taux de TVA (%)",
      type: "number",
      value: values.tauxTVA.toString(),
      onChange: handleChange,
    },
  ]

  const results = [
    {
      label: "Total TTC (MAD)",
      value: values.totalTTC,
    },
  ]

  const isFormValid = values.montantHT > 0 && values.tauxTVA > 0
  return (
    <ReusableForm
      title="Calcul des Totaux HT et TTC"
      fields={fields}
      onSubmit={calculate}
      submitButtonText="Calculer TTC"
      result={<ResultDisplay results={results} />}
      isFormValid={isFormValid}
    />
  )
}

export default CalculHTTTC
