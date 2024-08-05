"use client"

import { Button } from "./ui/Form/Button/button"
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel"
import { useFormInput } from "@/components/hooks/useFormInput"
import { calculerTVA } from "@/components/helpers"

interface TVAValues {
  totalTTC: number
  tauxTVA: number
  montantTVA: number
  totalHT: number
}

const CalculTVA = () => {
  const [values, handleChange, setValues] = useFormInput<TVAValues>({
    totalTTC: 0,
    tauxTVA: 20,
    montantTVA: 0,
    totalHT: 0,
  })

  const calculate = () => {
    const result = calculerTVA(values)
    setValues((prevState) => ({ ...prevState, ...result }))
  }

  return (
    <form className="mx-auto mb-4 max-w-lg rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Calcul de la TVA</h2>
      <div className="mb-4">
        <InputWithLabel
          id="totalTTC"
          name="totalTTC"
          label="Total TTC (MAD)"
          type="number"
          value={values.totalTTC.toString()}
          onChange={handleChange}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel
          id="tauxTVA"
          label="Taux de TVA (%)"
          type="number"
          value={values.tauxTVA.toString()}
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
          Calculer TVA
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-700">
          Montant de la TVA (MAD): <span className="font-bold">{values.montantTVA}</span>
        </p>
        <p className="text-sm text-gray-700">
          Total HT (MAD): <span className="font-bold">{values.totalHT}</span>
        </p>
      </div>
    </form>
  )
}

export default CalculTVA
