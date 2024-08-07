import React from "react"
import { useFormInput } from "@/components/hooks/useFormInput"
import { calculerSalaireNet } from "@/components/helpers"
import Decimal from "decimal.js"
import { ReusableForm } from "@/components/FormDisplay"
import ResultDisplay from "./displayedResult"
interface SalaryValues {
  salaireBrut: Decimal
  cotisationsSociales: Decimal
  salaireNet: Decimal
}

const CalculSalaires: React.FC = () => {
  const [values, handleChange, setValues] = useFormInput<SalaryValues>({
    salaireBrut: new Decimal(0),
    cotisationsSociales: new Decimal(0),
    salaireNet: new Decimal(0),
  }, (value: string) => new Decimal(value))

  const calculate = () => {
    const salaireNet = calculerSalaireNet(values)
    setValues((prev) => ({ ...prev, salaireNet: new Decimal(salaireNet) }))
  }

  const fields = [
    {
      id: "salaireBrut",
      name: "salaireBrut",
      label: "Salaire Brut (MAD)",
      type: "number",
      value: values.salaireBrut.toString(),
      onChange: handleChange,
    },
    {
      id: "cotisationsSociales",
      name: "cotisationsSociales",
      label: "Cotisations Sociales (MAD)",
      type: "number",
      value: values.cotisationsSociales.toString(),
      onChange: handleChange,
    },
  ]

  const results = [
    {
      label: "Salaire Net (MAD)",
      value: values.salaireNet.toString(),
    },
  ]

  // Check if all required fields have valid values
  const isFormValid = values.salaireBrut.greaterThan(0) && values.cotisationsSociales.greaterThan(0);

  return (
    <ReusableForm
      title="Calcul des Salaires Net et Brut"
      fields={fields}
      onSubmit={calculate}
      submitButtonText="Calculer Salaire Net"
      result={<ResultDisplay results={results} />}
      isFormValid={isFormValid} // Pass the form validation state
    />
  )
}

export default CalculSalaires
