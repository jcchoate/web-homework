import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { transactions } from '../../../mocks/transactions-data'
import { TransactionChart } from './TransactionChart'

describe('TransactionChart', () => {
  const props = {
    data: transactions
  }

  it('should render the Transaction Chart component ', () => {
    render(
      <MockedProvider mocks={[]}>
        <TransactionChart {...props} />
      </MockedProvider>
    )
    expect(screen.getByTestId('transactionChart')).toBeInTheDocument()
  })
})
