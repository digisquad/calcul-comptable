"use client"

import React from "react"
import { useFormInput } from "@/components/hooks/useFormInput"
import { calculerTVA } from "@/components/helpers"
import { ReusableForm } from "@/components/FormDisplay" // Adjust the import path as needed
import ResultDisplay from "./displayedResult"

interface TVAValues {
  totalTTC: number
  tauxTVA: number
  montantTVA: number
  totalHT: number
}

const CalculTVA: React.FC = () => {
  const [values, handleChange, setValues] = useFormInput<TVAValues>({
    totalTTC: 0,
    tauxTVA: 20,
    montantTVA: 0,
    totalHT: 0,
  })

  const validateValues = (values: TVAValues) => {
    return values.totalTTC > 0 && values.tauxTVA > 0
  }

  const calculate = () => {
    if (!validateValues(values)) return
    const result = calculerTVA(values)
    setValues((prevState) => ({ ...prevState, ...result }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d*\.?\d*$/.test(value)) {
      // Regex to allow only positive numbers and decimals
      handleChange(e)
    }
  }

  const fields = [
    {
      id: "totalTTC",
      name: "totalTTC",
      label: "Total TTC (MAD)",
      type: "number",
      value: values.totalTTC.toString(),
      onChange: handleNumberChange,
    },
    {
      id: "tauxTVA",
      name: "tauxTVA",
      label: "Taux de TVA (%)",
      type: "number",
      value: values.tauxTVA.toString(),
      onChange: handleNumberChange,
    },
  ]

  const results = [
    {
      label: "Montant de la TVA (MAD)",
      value: values.montantTVA,
    },
    {
      label: "Total HT (MAD)",
      value: values.totalHT,
    },
  ]

  return (
    <ReusableForm
      title="Calcul de la TVA"
      fields={fields}
      onSubmit={calculate}
      submitButtonText="Calculer TVA"
      submitButtonDisabled={!validateValues(values)}
      result={<ResultDisplay results={results} />}
    />
  )
}

export default CalculTVA
