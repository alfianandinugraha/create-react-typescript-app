import React, { ReactElement, useEffect } from 'react'
import messageConsole from '@/utils/logging'
import useCounter from '@/hooks/useCounter'
import { ButtonProps } from 'ButtonTypes'

const Button = ({ variant, children }: ButtonProps): ReactElement => {
  const [count, setCount] = useCounter(5)
  const buttonClickHandler = () => {
    messageConsole()
    setCount('+', 10)
  }

  useEffect(() => console.log(count), [count])

  return (
    <button
      type="submit"
      onClick={buttonClickHandler}
      className={variant}
      id="hellow"
      data-id="hehe"
    >
      <span>{children} </span>
      <span>: {count}</span>
    </button>
  )
}

export default Button
