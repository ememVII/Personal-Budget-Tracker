import TransactionItem from './TransactionItem/TransactionItem'
import Card from './../../UI/Card/Card'
import './TransactionsList.css'

function TransactionsList({
  expenses,
  incomes,
  transactions,
  onDeleteTransaction,
  onEditTransaction
}) {
  //   const expenses = transactions.filter(
  //     transaction => transaction.type === 'expense'
  //   )
  //   const incomes = transactions.filter(
  //     transaction => transaction.type === 'income'
  //   )

  const onDeleteTransactionHandler = transactionID => {
    onDeleteTransaction(transactionID)
  }
  
  const onEditTransactionHandler = transaction => {
    onEditTransaction(transaction)
  }

  if (transactions.length === 0) {
    return (
      <h1 className="transactions-list__not">There is no Transactions !!</h1>
    )
  }

  return (
    <div className="transactions row ">
      <Card className="expense-transactions col-12">
        <ul className="transactions-list">
          <h1>Expenses: </h1>
          {expenses.length === 0 && (
            <h1 className="transactions-list__not">There is no Expenses !!</h1>
          )}
          {expenses.map(transaction => (
            <TransactionItem
              key={transaction.id}
              id={transaction.id}
              transaction={transaction}
              category={transaction.category}
              amount={transaction.amount}
              description={transaction.description}
              date={transaction.date}
              type={transaction.type}
              onDeleteTransactionHandler={onDeleteTransactionHandler}
              onEditTransactionHandler={onEditTransactionHandler}
            />
          ))}
        </ul>
      </Card>

      <Card className="income-transactions col-12">
        <ul className="transactions-list">
          <h1>Incomes: </h1>
          {incomes.length === 0 && (
            <h1 className="transactions-list__not">There is no incomes !!</h1>
          )}
          {incomes.map(transaction => (
            <TransactionItem
              key={transaction.id}
              id={transaction.id}
              transaction={transaction}
              category={transaction.category}
              amount={transaction.amount}
              description={transaction.description}
              date={transaction.date}
              type={transaction.type}
              onDeleteTransactionHandler={onDeleteTransactionHandler}
              onEditTransactionHandler={onEditTransactionHandler}
            />
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default TransactionsList
