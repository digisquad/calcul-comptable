// components/ResultDisplay.tsx
import React from "react"
import Decimal from "decimal.js"

interface ResultField {
  label: string
  value: number | string | Decimal
}

interface ResultDisplayProps {
  results: ResultField[]
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results }) => {
  return (
    <>
      {results.map((result, index) => (
        <p key={index} className="text-sm text-gray-700">
          {result.label}:{" "}
          <span className="font-bold">{result.value instanceof Decimal ? result.value.toString() : result.value}</span>
        </p>
      ))}
    </>
  )
}

export default ResultDisplay
