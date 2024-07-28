"use client"

import { useState } from "react"
import { Button } from "../../common/atoms/button"
import { Input } from "../../common/atoms/input"
import { Label } from "../../common/atoms/label"

function CalculTVA() {
  const [totalTTC, setTotalTTC] = useState(0)
  const [tauxTVA, setTauxTVA] = useState(20)
  const [montantTVA, setMontantTVA] = useState(0)
  const [totalHT, setTotalHT] = useState(0)

  const calculerTVA = () => {
    const tva = (totalTTC * tauxTVA) / (100 + tauxTVA)
    setMontantTVA(tva)
    setTotalHT(totalTTC - tva)
  }

  return (
    <form className="mx-auto mb-4 max-w-lg rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Calcul de la TVA</h2>
      <div className="mb-4">
        <Label htmlFor="totalTTC" className="mb-2 block text-sm font-bold text-gray-700">
          Total TTC (MAD)
        </Label>
        <Input
          id="totalTTC"
          type="number"
          value={totalTTC}
          onChange={(e) => setTotalTTC(Number(e.target.value))}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="tauxTVA" className="mb-2 block text-sm font-bold text-gray-700">
          Taux de TVA (%)
        </Label>
        <Input
          id="tauxTVA"
          type="number"
          value={tauxTVA}
          onChange={(e) => setTauxTVA(Number(e.target.value))}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button
          type="button"
          onClick={calculerTVA}
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Calculer TVA
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-700">
          Montant de la TVA (MAD): <span className="font-bold">{montantTVA}</span>
        </p>
        <p className="text-sm text-gray-700">
          Total HT (MAD): <span className="font-bold">{totalHT}</span>
        </p>
      </div>
    </form>
  )
}

export default CalculTVA
