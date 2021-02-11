import React, { ReactElement } from 'react'
import { messageConsole } from '@/utils/logging'

interface ButtonProps {
  children: any
}

export default function Button(props: ButtonProps): ReactElement {
  const showMessage = () => messageConsole()

  return (
    <button onClick={showMessage}>
      {props.children}
    </button>
  )
}
