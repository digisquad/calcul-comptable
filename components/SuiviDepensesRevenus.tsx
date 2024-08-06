"use client"
import { ChangeEvent } from "react"
import Decimal from "decimal.js"
import { Button } from "@/components/ui/Form/Button/button"
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel"
import { useDecimalArray } from "@/components/hooks/useDecimalArray"
import { useDecimalInput } from "@/components/hooks/useDecimalInput"
import { calculateTotal } from "@/components/helpers"

interface DecimalArrayInputProps {
  values: Decimal[]
  onChange: (index: number, value: string) => void
  label: string
  addNewItem: () => void
}

const DecimalArrayInput = ({ values, onChange, label, addNewItem }: DecimalArrayInputProps) => (
  <div className="mb-4">
    {values.map((value, index) => (
      <InputWithLabel
        key={index}
        id={`${label.toLowerCase().replace(/\s+/g, "-")}-${index}`}
        type="number"
        value={value.toString()}
        onChange={(e) => onChange(index, e.target.value)}
        className="focus:shadow-outline mb-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        label={label}
      />
    ))}
    <Button
      type="button"
      onClick={addNewItem}
      className="focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
    >
      Ajouter
    </Button>
  </div>
)

const SuiviDepensesRevenus = () => {
  const [depenses, handleDepenseChange, addDepense] = useDecimalArray()
  const [revenus, handleRevenuChange, addRevenu] = useDecimalArray()
  const [totalDepenses, handleTotalDepensesChange] = useDecimalInput()
  const [totalRevenus, handleTotalRevenusChange] = useDecimalInput()

  const calculerTotaux = () => {
    handleTotalDepensesChange({
      target: { value: calculateTotal(depenses).toString() },
    } as ChangeEvent<HTMLInputElement>)
    handleTotalRevenusChange({ target: { value: calculateTotal(revenus).toString() } } as ChangeEvent<HTMLInputElement>)
  }

  return (
    <form className="mx-auto mb-4 max-w-lg rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Suivi des Dépenses et Revenus</h2>
      <DecimalArrayInput
        values={depenses}
        onChange={handleDepenseChange}
        label="Liste des Dépenses (MAD)"
        addNewItem={addDepense}
      />
      <DecimalArrayInput
        values={revenus}
        onChange={handleRevenuChange}
        label="Liste des Revenus (MAD)"
        addNewItem={addRevenu}
      />
      <div className="flex items-center justify-between">
        <Button
          type="button"
          onClick={calculerTotaux}
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Calculer Totaux
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-700">
          Dépenses Totales (MAD): <span className="font-bold">{totalDepenses.toString()}</span>
        </p>
        <p className="text-sm text-gray-700">
          Revenus Totals (MAD): <span className="font-bold">{totalRevenus.toString()}</span>
        </p>
      </div>
    </form>
  )
}

export default SuiviDepensesRevenus
