import React from 'react'
import Button from '@/components/Button'
import { fireEvent, render } from '@testing-library/react'

describe('increment count', () => {
  it('click button to increment', () => {
    const { getByTestId } = render(<Button variant="primary">Click me</Button>)
    fireEvent.click(getByTestId('button'))

    expect(getByTestId('count').innerHTML).toBe('15')
  })
})
