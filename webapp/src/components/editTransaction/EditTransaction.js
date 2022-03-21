import { useMutation } from '@apollo/client'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Modal from '@material-ui/core/Modal'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { func, object } from 'prop-types'
import React, { useState } from 'react'
import EDIT_TRANSACTION from '../../gql/editTransaction.gql'
import {
  amntGridAreaStyle, cancelGridAreaStyle, descGridAreaStyle, editGridStyle, editModalStyle, merchGridAreaStyle,
  radioGridAreaStyle,
  submitGridAreaStyle
} from '../../styles/index'

function EditTransaction ({ itemToEdit, editTransactionInState }) {
  const [editTransaction] = useMutation(EDIT_TRANSACTION)

  const [open, setOpen] = useState(false)
  const [newDescription, setNewDescription] = useState(itemToEdit.description)
  const [newAmount, setNewAmount] = useState(itemToEdit.amount)
  const [newMerchantID, setNewMerchantID] = useState(itemToEdit.merchant_id)
  const [newDebit, setNewDebit] = useState(itemToEdit.debit)
  const [newCredit, setNewCredit] = useState(itemToEdit.credit)

  const handleNewDescriptionChange = (e) => setNewDescription(e.target.value)
  const handleNewAmountChange = (e) => setNewAmount(e.target.value)
  const handleNewMerchantID = (e) => setNewMerchantID(e.target.value)
  const handleDebitCreditChange = (e) => {
    if (e.target.value === 'debit') {
      setNewDebit(true)
      setNewCredit(false)
    } else {
      setNewDebit(false)
      setNewCredit(true)
    }
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  async function handleSubmit (e) {
    e.preventDefault()
    const txn = await editTransaction({
      variables: {
        id: itemToEdit.id,
        user_id: itemToEdit.user_id,
        merchant_id: newMerchantID,
        description: newDescription,
        amount: parseFloat(newAmount),
        credit: newCredit,
        debit: newDebit
      }
    })
    editTransactionInState(txn.data.editTransaction)
    handleClose()
  }

  return (
    <Box data-testid={'editTransaction'}>
      <Modal
        aria-describedby='modal-modal-description'
        aria-labelledby='modal-modal-title'
        css={editModalStyle}
        onClose={handleClose}
        open={open}
      >
        <Box display='flex' flexDirection='column'>
          <Typography id='modal-modal-title' variant='h6'>
            Edit your transaction
          </Typography>
          <Box css={editGridStyle}>
            <TextField css={descGridAreaStyle} label='Description' onChange={handleNewDescriptionChange} value={newDescription} variant='outlined' />
            <TextField css={amntGridAreaStyle} label='Amount' onChange={handleNewAmountChange} value={newAmount} variant='outlined' />
            <TextField css={merchGridAreaStyle} label='Merchant ID' onChange={handleNewMerchantID} value={newMerchantID} variant='outlined' />
            <FormControl component='fieldset' css={radioGridAreaStyle}>
              <RadioGroup name='paymentType' onChange={handleDebitCreditChange} row value={newDebit ? 'debit' : 'credit'}>
                <FormControlLabel
                  control={<Radio color='primary' />}
                  label='Debit'
                  labelPlacement='start'
                  value='debit'
                />
                <FormControlLabel
                  control={<Radio color='primary' />}
                  label='Credit'
                  labelPlacement='start'
                  value='credit'
                />
              </RadioGroup>
            </FormControl>
            <Button color='primary' css={submitGridAreaStyle} mx='auto' onClick={handleSubmit} variant='contained'>Submit</Button>
            <Button color='secondary' css={cancelGridAreaStyle} mx='auto' onClick={handleClose} variant='outlined'>Close</Button>
          </Box>
        </Box>
      </Modal>
      <div>
        <Button color='primary' onClick={handleOpen}>Edit</Button>
      </div>
    </Box>
  )
}

EditTransaction.propTypes = {
  itemToEdit: object.isRequired,
  editTransactionInState: func.isRequired
}

export { EditTransaction }
