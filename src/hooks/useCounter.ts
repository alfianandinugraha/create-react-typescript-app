import { useState } from 'react'

type OperatorType = '+' | '-' | '/' | '*'

const useCounter = (
  value: number
): [number, (opr: OperatorType, inc: number) => void] => {
  const [count, setCount] = useState(value)

  const valueHandler = (operator: OperatorType, inc: number) => {
    if (operator === '+') setCount(count + inc)
    if (operator === '-') setCount(count - inc)
    if (operator === '*') setCount(count * inc)
    if (operator === '/') setCount(count / inc)
  }

  return [count, valueHandler]
}

export type { OperatorType }
export default useCounter
