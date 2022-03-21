import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { transactions } from '../../../mocks/transactions-data'
import { RemoveTransaction } from './RemoveTransaction'

describe('RemoveTransaction', () => {
  const props = {
    itemToRemove: transactions[0].id
  }

  it('should render the remove transaction component ', () => {
    render(
      <MockedProvider mocks={[]}>
        <RemoveTransaction {...props} />
      </MockedProvider>
    )
    expect(screen.getByTestId('removeTransaction')).toBeInTheDocument()
  })
})
