import React, { ReactElement } from 'react'
import messageConsole from '@/utils/logging'

interface ButtonProps {
  children: string
  variant: string
}

const Button = ({ variant, children }: ButtonProps): ReactElement => {
  const showMessage = () => messageConsole()

  return (
    <button
      type="submit"
      onClick={showMessage}
      className={variant}
      id="hellow"
      data-id="hehe"
    >
      {children}
    </button>
  )
}

export default Button
