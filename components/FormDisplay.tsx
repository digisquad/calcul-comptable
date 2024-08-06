import React from "react"
import { Button } from "./ui/Form/Button/button"
import { InputWithLabel } from "@/components/ui/Form/InputWithLabel/InputWithLabel"

interface FormField {
  id: string
  name: string
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface ReusableFormProps {
  title: string
  fields: FormField[]
  onSubmit: () => void
  submitButtonText: string
  result?: React.ReactNode
}

export const ReusableForm: React.FC<ReusableFormProps> = ({ title, fields, onSubmit, submitButtonText, result }) => {
  return (
    <form className="mx-auto mb-4 max-w-lg rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">{title}</h2>
      {fields.map((field) => (
        <div key={field.id} className="mb-4">
          <InputWithLabel
            id={field.id}
            name={field.name}
            label={field.label}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>
      ))}
      <div className="flex items-center justify-between">
        <Button
          type="button"
          onClick={onSubmit}
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          {submitButtonText}
        </Button>
      </div>
      {result && <div className="mt-6">{result}</div>}
    </form>
  )
}

export default ReusableForm
