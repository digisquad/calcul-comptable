"use client"

import { useState } from "react"
import { Button } from "./ui/Form/Button/button"
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel"
import { useDecimalInput } from "@/components/hooks/useDecimalInput"
import { calculerMarge } from "@/components/helpers"
import Decimal from "decimal.js"

interface Result {
  margeBrute: Decimal
  margeNette: Decimal
}

const CalculMargesBenefices = () => {
  const [chiffreAffaires, handleChiffreAffairesChange] = useDecimalInput()
  const [coutVentes, handleCoutVentesChange] = useDecimalInput()
  const [result, setResult] = useState<Result>({ margeBrute: new Decimal(0), margeNette: new Decimal(0) })

  const calculate = () => {
    const { margeBrute, margeNette } = calculerMarge({ chiffreAffaires, coutVentes })
    setResult({ margeBrute, margeNette })
  }

  return (
    <form className="mx-auto mb-4 max-w-lg rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Calcul des Marges et Bénéfices</h2>
      <div className="mb-4">
        <InputWithLabel
          id="chiffreAffaires"
          type="number"
          value={chiffreAffaires.toString()}
          onChange={handleChiffreAffairesChange}
          label="Chiffre d'Affaires (MAD)"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <InputWithLabel
          id="coutVentes"
          type="number"
          value={coutVentes.toString()}
          onChange={handleCoutVentesChange}
          label="Coût des Ventes (MAD)"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <Button
          type="button"
          onClick={calculate}
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Calculer
        </Button>
      </div>
      <div>
        <p>Marge Brute: {result.margeBrute.toString()}</p>
        <p>Marge Nette: {result.margeNette.toString()}</p>
      </div>
    </form>
  )
}

export default CalculMargesBenefices
