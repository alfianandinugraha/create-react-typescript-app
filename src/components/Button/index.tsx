import React, { ReactElement } from 'react'
import useCounter from '@/hooks/useCounter'
import { ButtonProps } from 'ButtonTypes'

const Button = ({ variant, children }: ButtonProps): ReactElement => {
  const [count, setCount] = useCounter(5)
  const buttonClickHandler = () => {
    setCount('+', 10)
  }

  return (
    <button
      type="submit"
      onClick={buttonClickHandler}
      className={variant}
      id="hellow"
      data-id="hehe"
      data-testid="button"
    >
      <span>{children} : </span>
      <span data-testid="count">{count}</span>
    </button>
  )
}

export default Button
