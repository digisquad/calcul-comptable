"use client"

import { Button } from "./ui/Form/Button/button"
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel"
import { useFormInput } from "@/components/hooks/useFormInput"
import { calculerSalaireNet } from "@/components/helpers"
import Decimal from "decimal.js"

interface SalaryValues {
  salaireBrut: Decimal
  cotisationsSociales: Decimal
  salaireNet: Decimal
}

const CalculSalaires = () => {
  const [values, handleChange, setValues] = useFormInput<SalaryValues>({
    salaireBrut: new Decimal(0),
    cotisationsSociales: new Decimal(0),
    salaireNet: new Decimal(0),
  })

  const calculate = () => {
    const salaireNet = calculerSalaireNet(values)
    setValues((prev) => ({ ...prev, salaireNet: new Decimal(salaireNet) }))
  }

  return (
    <form className="mx-auto mb-4 max-w-lg rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Calcul des Salaires Net et Brut</h2>
      <div className="mb-4">
        <InputWithLabel
          id="salaireBrut"
          name="salaireBrut"
          label="Salaire Brut (MAD)"
          type="number"
          value={values.salaireBrut.toString()}
          onChange={handleChange}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel
          id="cotisationsSociales"
          name="cotisationsSociales"
          label="Cotisations Sociales (MAD)"
          type="number"
          value={values.cotisationsSociales.toString()}
          onChange={handleChange}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button
          type="button"
          onClick={calculate}
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Calculer Salaire Net
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-700">
          Salaire Net (MAD): <span className="font-bold">{values.salaireNet.toString()}</span>
        </p>
      </div>
    </form>
  )
}

export default CalculSalaires
