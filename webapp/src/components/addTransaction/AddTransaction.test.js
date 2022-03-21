import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { transactions } from '../../../mocks/transactions-data'
import { AddTransaction } from './AddTransaction'

describe('AddTransaction', () => {
  const props = {
    data: transactions
  }

  it('should render the Add Transaction component ', () => {
    render(
      <MockedProvider mocks={[]}>
        <AddTransaction {...props} />
      </MockedProvider>
    )
    expect(screen.getByTestId('addTransaction')).toBeInTheDocument()
  })
})
