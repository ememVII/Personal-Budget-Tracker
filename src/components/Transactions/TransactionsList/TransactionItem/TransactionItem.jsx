import Button from '../../../UI/Button/Button'
import Card from '../../../UI/Card/Card'
import TransactionDate from './TransactionDate/TransactionDate'
import './TransactionItem.css'

function TransactionItem({ transaction, id, category, amount, description, date, type, onDeleteTransactionHandler, onEditTransactionHandler}) {

  const handleDeleteTransaction = (transactionID) => {
    onDeleteTransactionHandler(transactionID)
  }
  
  const handleEditTransaction = (transaction) => {
    onEditTransactionHandler(transaction)
  }
  
  return (
    <li>
      <div className={`transaction-item ${type === 'expense' ? 'expense' : 'income'}`}>
        <div className='transaction-item__date'><TransactionDate date={date} /></div>
        <div className="transaction-item__description">
          <h2>{description}</h2>
          <p><span className='h6 d-block'>Category:</span> {category}</p>
          <div className="transaction-item__amount">{amount} $</div>
          <Button className='transaction-item__deleteBtn' onClick={() => handleDeleteTransaction(id)}>
            <i className="fa-solid fa-trash"></i>
          </Button>
          <Button className='transaction-item__deleteBtn' onClick={() => handleEditTransaction(transaction)}>
          <i className="fa-solid fa-pen-to-square"></i>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default TransactionItem
