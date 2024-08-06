"use client"

import React from "react"
import { calculerAmortissement } from "@/components/helpers"
import { useFormInput } from "@/components/hooks/useFormInput"
import { ReusableForm } from "@/components/FormDisplay"
import ResultDisplay from "./displayedResult"

interface Values {
  valeurAcquisition: number
  valeurResiduelle: number
  dureeAmortissement: number
  amortissementAnnuel: number
}

const CalculAmortissements: React.FC = () => {
  const [values, handleChange, setValues] = useFormInput<Values>({
    valeurAcquisition: 0,
    valeurResiduelle: 0,
    dureeAmortissement: 0,
    amortissementAnnuel: 0,
  })

  const handleCalculerAmortissement = () => {
    const amortissement = calculerAmortissement(
      values.valeurAcquisition,
      values.valeurResiduelle,
      values.dureeAmortissement,
    )
    setValues((prevValues) => ({
      ...prevValues,
      amortissementAnnuel: amortissement.toNumber(),
    }))
  }

  const fields = [
    {
      id: "valeurAcquisition",
      name: "valeurAcquisition",
      label: "Valeur d'Acquisition (MAD)",
      type: "number",
      value: values.valeurAcquisition.toString(),
      onChange: handleChange,
    },
    {
      id: "valeurResiduelle",
      name: "valeurResiduelle",
      label: "Valeur Résiduelle (MAD)",
      type: "number",
      value: values.valeurResiduelle.toString(),
      onChange: handleChange,
    },
    {
      id: "dureeAmortissement",
      name: "dureeAmortissement",
      label: "Durée d'Amortissement (années)",
      type: "number",
      value: values.dureeAmortissement.toString(),
      onChange: handleChange,
    },
  ]

  const results = [
    {
      label: "Amortissement Annuel (MAD)",
      value: values.amortissementAnnuel,
    },
  ]

  return (
    <ReusableForm
      title="Gestion des Amortissements"
      fields={fields}
      onSubmit={handleCalculerAmortissement}
      submitButtonText="Calculer Amortissement"
      result={<ResultDisplay results={results} />}
    />
  )
}

export default CalculAmortissements
