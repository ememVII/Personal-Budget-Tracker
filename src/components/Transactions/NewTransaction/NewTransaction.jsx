import { useEffect, useState } from 'react'
import Button from './../../UI/Button/Button'
import TransactionsForm from './TransactionsForm/TransactionsForm'
import './NewTransaction.css'

function NewTransaction(props) {
  const [isShown, setIsShown] = useState(true)

  const onAddNewTransaction = transaction => {
    const newTransaction = {
      ...transaction,
      id: Date.now() + Math.round(Math.random() * 100),
    }
    props.onAddNewTransaction(newTransaction)
  }

  const onEditTransaction = (newUpdatedTransaction) => {
    const updatedTransaction = {
      ...newUpdatedTransaction
    }
    props.onUpdateTransaction(updatedTransaction)
  }
  
  const onShowHandler = () => {
    setIsShown(true)
  }

  const onHideHandler = () => {
    setIsShown(false)
  }

  return (
    <div className="new-transaction">
      {!isShown && <Button onClick={onShowHandler}>Add New Transaction</Button>}
      {isShown && (
        <TransactionsForm
          onCancel={onHideHandler}
          onSaveForm={onAddNewTransaction}
          onEditForm={onEditTransaction}
          transactionToEdit={props.transactionToEdit}
        />
      )}
    </div>
  )
}

export default NewTransaction
