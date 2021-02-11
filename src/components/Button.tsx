import React, { ReactElement } from 'react'

interface ButtonProps {
  children: any
}

export default function Button(props: ButtonProps): ReactElement {
  return (
    <button>
      {props.children}
    </button>
  )
}
