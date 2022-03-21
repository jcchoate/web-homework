import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import { arrayOf, bool, func, number, shape, string } from 'prop-types'
import React from 'react'
import { dataTableStyle, editButtonStyle } from '../../styles/index'
import { EditTransaction } from '../editTransaction/EditTransaction'
import { RemoveTransaction } from '../removeTransaction/RemoveTransaction'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data, deleteTransactionFromState, editTransactionInState }) {
  return (
    <TableContainer component={Paper} css={dataTableStyle} data-testid={'txTable'}>
      <Table >
        <TableBody>
          <TableRow className='header'>
            <TableCell >Amount</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Debit or Credit</TableCell>
            <TableCell >Merchant ID</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          {
            data && data.map(tx => {
              const { id, description, merchant_id: merchantId, debit, amount } = tx
              return (
                <TableRow data-testid={`transaction-${id}`} key={`transaction-${id}`}>
                  <TableCell data-testid={makeDataTestId(id, 'amount')}>{amount}</TableCell>
                  <TableCell data-testid={makeDataTestId(id, 'description')}>{description}</TableCell>
                  <TableCell data-testid={makeDataTestId(id, 'debitOrCredit')}>{debit ? 'debit' : 'credit'}</TableCell>
                  <TableCell data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</TableCell>
                  <TableCell >
                    <EditTransaction css={editButtonStyle} editTransactionInState={editTransactionInState} itemToEdit={tx} />
                  </TableCell>
                  <TableCell >
                    <RemoveTransaction data-testid={'removeTransaction-button'} deleteTransactionFromState={deleteTransactionFromState} itemToRemove={id} />
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  })),
  deleteTransactionFromState: func.isRequired,
  editTransactionInState: func.isRequired
}
