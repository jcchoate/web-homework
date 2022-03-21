import { useMutation } from '@apollo/client'
import Button from '@material-ui/core/Button'
import { func, string } from 'prop-types'
import React from 'react'
import REMOVE_TRANSACTION from '../../gql/removeTransaction.gql'

function RemoveTransaction ({ itemToRemove, deleteTransactionFromState }) {
  const [removeTransaction] = useMutation(REMOVE_TRANSACTION)

  async function handleClick (e) {
    e.preventDefault()
    const deleteTxn = await removeTransaction({ variables: { id: itemToRemove } })
    deleteTransactionFromState(deleteTxn.data.removeTransaction.id)
  }

  return (
    <div data-testid={'removeTransaction'}>
      <Button color='secondary' onClick={handleClick} >Delete</Button>
    </div>
  )
}

RemoveTransaction.propTypes = {
  itemToRemove: string.isRequired,
  deleteTransactionFromState: func.isRequired
}

export { RemoveTransaction }
