/* eslint-disable camelcase */
import { useMutation } from '@apollo/client'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ADD_TRANSACTION from '../../gql/addTransaction.gql'
import {
  addTrxnButtonStyle,
  addTrxnContainerStyle,
  formFieldStyle,
  headerStyle,
  radioButtonStyle
} from '../../styles/index'

function AddTransaction ({ addTransactionToState }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0.00)
  const [credit, setCredit] = useState(true)
  const [debit, setDebit] = useState(false)
  const [merchant_id, setMerchant_id] = useState('')

  const [addTransaction] = useMutation(ADD_TRANSACTION)

  const handleDescriptionChange = e => setDescription(e.target.value)
  const handleAmountChange = e => setAmount(e.target.valueAsNumber)
  const handleMerchantChange = e => setMerchant_id(e.target.value)
  const handleDebitCreditChange = e => {
    if (e.target.value === 'debit') {
      setDebit(true)
      setCredit(false)
    } else {
      setDebit(false)
      setCredit(true)
    }
  }
  async function handleSubmit (e) {
    e.preventDefault()
    const txn = await addTransaction({ variables: { user_id: '11111', merchant_id, description, amount, credit, debit } })
    addTransactionToState(txn.data.addTransaction)
    setDescription('')
    setAmount(0.00)
  }

  return (
    <form data-testid={'addTransaction'} onSubmit={handleSubmit}>
      <Typography css={headerStyle}>Add a Transaction</Typography>
      <Box css={addTrxnContainerStyle}>
        <Box css={formFieldStyle}>
          <TextField className='test' css={formFieldStyle} label='Description' onChange={handleDescriptionChange} required type='text' value={description} variant='outlined' />
        </Box>
        <Box css={formFieldStyle}>
          <TextField className='test' label='Amount' onChange={handleAmountChange} required type='number' value={amount} variant='outlined' />
        </Box>
        <Box css={formFieldStyle}>
          <TextField className='test' label='Merchant ID' onChange={handleMerchantChange} required type='text' value={merchant_id} variant='outlined' />
        </Box>
        <FormControl component='fieldset'>
          <RadioGroup css={radioButtonStyle} name='paymentType' onChange={handleDebitCreditChange} row value={debit ? 'debit' : 'credit'}>
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
        <Box css={addTrxnButtonStyle}>
          <Button color='default' mx='auto' type='submit' variant='contained'>Add Transaction</Button>
        </Box>
      </Box>
    </form>
  )
}

AddTransaction.propTypes = {
  addTransactionToState: PropTypes.func
}

export { AddTransaction }
