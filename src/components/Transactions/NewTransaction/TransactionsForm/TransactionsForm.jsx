import { useEffect, useState } from 'react'
import Button from './../../../UI/Button/Button'
import ErrorModal from './../../../UI/ErrorModal/ErrorModal'
import './TransactionsForm.css'

function TransactionsForm({
  transactionToEdit,
  onSaveForm,
  onCancel,
  onEditForm,
}) {
  const [isEditMode, setIsEditMode] = useState(false)
  // setInput Data
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredCategory, setEnteredCategory] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredDescription, setEnteredDescription] = useState('')
  const [transactionType, setTransactionType] = useState('expense')
  // update Transaction id
  const [transactionId, setTransactionId] = useState(0)
  // setError
  const [error, setError] = useState()

  useEffect(() => {
    if (transactionToEdit) {
      setIsEditMode(true)

      const formattedDate = new Date(transactionToEdit.date)
        .toISOString()
        .split('T')[0]

      setEnteredAmount(transactionToEdit.amount)
      setEnteredCategory(transactionToEdit.category)
      setEnteredDate(formattedDate)
      setEnteredDescription(transactionToEdit.description)
      setTransactionType(transactionToEdit.type)
      setTransactionId(transactionToEdit.id)
    }
  }, [transactionToEdit])

  const categoryChangeHandler = e => {
    setEnteredCategory(e.target.value)
  }
  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value)
  }
  const dateChangeHandler = e => {
    setEnteredDate(e.target.value)
  }
  const descriptionChangeHandler = e => {
    setEnteredDescription(e.target.value)
  }
  const transactionTypeChangeHandler = e => {
    setTransactionType(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    // setErrors
    if (
      enteredCategory.trim().length === 0 ||
      enteredDate.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setError({
        title: 'Missing Field !',
        description: 'Please Fill All Required Fields',
      })
      return
    }

    if (+enteredAmount < 0.01) {
      setError({
        title: 'Incorrect Amount',
        description: 'Please write correct amount > 0.01 $',
      })
      return
    }
    // New Transaction
    const newTransaction = {
      category: enteredCategory,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      description: enteredDescription,
      type: transactionType,
    }

    onSaveForm(newTransaction)

    // Clear Form
    clrForm()
  }
  // Close Error Modal
  const onSubmit = () => {
    setError(null)
  }

  // Update Transaction
  const handleEditTransaction = () => {
    // Update Transaction
    const updateTransaction = {
      id: transactionId,
      category: enteredCategory,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      description: enteredDescription,
      type: transactionType,
    }
    onEditForm(updateTransaction)
    setIsEditMode(false)
    clrForm()
  }

  const onCancelHandler = () => {
    onCancel()
    clrForm()
  }
  
  const clrForm = () => {
    setEnteredCategory('')
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredDescription('')
    setIsEditMode(false)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        {error && (
          <ErrorModal
            title={error.title}
            description={error.description}
            onSubmit={onSubmit}
          />
        )}
        <div className="new-transaction__controls">
          <div className="new-transaction__controlsGroup row">
            <div className="new-transaction__control col-md-6">
              <label htmlFor="category">Category: </label>
              <input
                onChange={categoryChangeHandler}
                value={enteredCategory}
                type="text"
                name="category"
                id="category"
              />
            </div>
            <div className="new-transaction__control col-md-6">
              <label htmlFor="amount">Amount: </label>
              <input
                onChange={amountChangeHandler}
                value={enteredAmount}
                type="number"
                step="0.01"
                name="amount"
                id="amount"
              />
            </div>
            <div className="new-transaction__control col-md-6">
              <label htmlFor="description">Description: </label>
              <input
                onChange={descriptionChangeHandler}
                value={enteredDescription}
                type="text"
                name="description"
                id="description"
              />
            </div>
            <div className="new-transaction__control col-md-6">
              <label htmlFor="date">Date: </label>
              <input
                onChange={dateChangeHandler}
                value={enteredDate}
                type="date"
                min="2024-01-01"
                max="2024-12-31"
                name="date"
                id="date"
              />
            </div>
            <div className="new-transaction__control col mt-4">
              <label htmlFor="transactionType">Transaction Type: </label>
              <select
                onChange={transactionTypeChangeHandler}
                value={transactionType}
                id="transactionType"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
          </div>

          <div className="new-transaction__btns">
            <Button className="button" type="button" onClick={() => clrForm()}>
              Cancel
            </Button>
            {isEditMode && (
              <Button
                className="button"
                type="button"
                onClick={handleEditTransaction}
              >
                Edit Transaction
              </Button>
            )}
            {!isEditMode && (
              <Button className="button" type="submit">
                Add Transaction
              </Button>
            )}
          </div>
        </div>
      </form>
    </>
  )
}

export default TransactionsForm
