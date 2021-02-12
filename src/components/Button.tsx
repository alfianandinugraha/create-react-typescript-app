import React, { ReactElement, useEffect } from 'react'
import messageConsole from '@/utils/logging'
import useCounter from '@/hooks/useCounter'

interface ButtonProps {
  children: string
  variant: string
}

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
      {children}
    </button>
  )
}

export default Button
