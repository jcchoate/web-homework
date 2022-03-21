import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { transactions } from '../../../mocks/transactions-data'
import { EditTransaction } from './EditTransaction'

describe('EditTransaction', () => {
  it('should render the Edit Transaction component', () => {
    const editTransactionInState = jest.fn()
    const props = {
      itemToEdit: transactions[0],
      editTransactionInState
    }

    render(
      <MockedProvider mocks={[]}>
        <EditTransaction {...props} />
      </MockedProvider>
    )
    expect(screen.getByTestId('editTransaction')).toBeInTheDocument()
  })
})
