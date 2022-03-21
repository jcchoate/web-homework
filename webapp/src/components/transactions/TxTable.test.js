import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { TxTable } from './TxTable'
import { transactions } from '../../../mocks/transactions-data'

describe('TxTable', () => {
  const props = {
    data: transactions
  }

  it('should render the Transactions table ', () => {
    render(
      <MockedProvider mocks={[]}>
        <TxTable {...props} />
      </MockedProvider>
    )
    expect(screen.getByTestId('txTable')).toBeInTheDocument()
  })

  // it('should call deleteTransactionFromState when the delete button is clicked', () => {
  //   const deleteTransactionFromState = jest.fn()
  //   props.deleteTransactionFromState = deleteTransactionFromState

  //   render(
  //     <MockedProvider mocks={mocks}>
  //       <TxTable {...props} />
  //     </MockedProvider>
  //   )
  //   const test = screen.queryAllByRole('button')[1]
  //   fireEvent.click(test)

  //   expect(deleteTransactionFromState).toHaveBeenCalled()
  // })
})
