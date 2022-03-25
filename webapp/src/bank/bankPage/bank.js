import { useQuery } from '@apollo/client'
import React, { Fragment, useEffect, useState } from 'react'
import { AddTransaction } from '../components/addTransaction/AddTransaction'
import { TransactionChart } from '../components/transactionChart/TransactionChart'
import { TxTable } from '../components/transactions/TxTable'
import GetTransactions from '../gql/transactions.gql'

export function Bank () {
  const { loading, error, data = {} } = useQuery(GetTransactions)
  const [txns, setTxns] = useState([])

  const addTransactionToState = (t) => {
    setTxns([...txns, t])
  }

  const addTransactionsToState = (t) => {
    const reducedArray = txns.reduce((acc, txn) => {
      const alreadyExists = acc.some((newTxn) => txn.id === newTxn.id)

      if (alreadyExists) {
        return acc
      } else {
        return [...acc, txn]
      }
    }, t)
    setTxns(reducedArray)
  }

  const deleteTransactionFromState = (id) => {
    const filteredArray = txns.filter(txn => txn.id !== id)
    setTxns(filteredArray)
  }

  const editTransactionInState = (t) => {
    const editedArray = txns.map(txn => txn.id === t.id ? t : txn)
    setTxns(editedArray)
  }

  useEffect(() => {
    if (data.transactions) {
      addTransactionsToState(data.transactions)
    }
  }, [data.transactions])

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }
  return (
    <Fragment>
      <AddTransaction addTransactionToState={addTransactionToState} />
      <TxTable data={txns} deleteTransactionFromState={deleteTransactionFromState} editTransactionInState={editTransactionInState} />
      <TransactionChart data={txns} />
    </Fragment>
  )
}
