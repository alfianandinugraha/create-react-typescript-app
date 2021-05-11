import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

it('Show title', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('title')).toBeInTheDocument()
})
