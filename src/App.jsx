import { useEffect, useState } from 'react';
import NewTransaction from './components/Transactions/NewTransaction/NewTransaction';
import TransactionsList from './components/Transactions/TransactionsList/TransactionsList';
import Summary from './components/Summary/Summary';

// const staticData = [
//   {
//     id: 0,
//     category: 'Labtop',
//     amount: '399.99',
//     description: 'blaa',
//     date : new Date('2019-07-25'),
//     type: 'income'
//   },
//   {
//     id: 1,
//     category: 'PC Monitor',
//     amount: '139.99',
//     description: 'blaa',
//     date : new Date('2021-03-19'),
//     type: 'expense'
//   },
//   {
//     id: 2,
//     category: 'SSD',
//     amount: '78.99',
//     description: 'blaa',
//     date : new Date('2021-08-05'),
//     type: 'income'
//   },
//   {
//     id: 3,
//     category: 'Mouse',
//     amount: '18.99',
//     description: 'blaa',
//     date : new Date('2021-10-15'),
//     type: 'income'
//   },
//   {
//     id: 4,
//     category: 'Samsung Tv',
//     amount: '639.99',
//     description: 'blaa',
//     date : new Date('2022-09-15'),
//     type: 'expense'
//   },
//   {
//     id: 5,
//     category: 'Sweatshirt',
//     amount: '74.99',
//     description: 'blaa',
//     date : new Date('2022-10-07'),
//     type: 'expense'
//   }
// ]

function App() {
  
  const [transactions, setTransactions] = useState([])
  const [transactionToEdit, setTransactionToEdit] = useState(null)
  
  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions')
    if(storedTransactions) {
      const parsedTransactions = JSON.parse(storedTransactions).map((transaction) => ({
        ...transaction,
        date: new Date(transaction.date)
      }))
      
      setTransactions(parsedTransactions)
    }
  }, [])
  
  
  useEffect(() => {
    const transactionToStore = transactions.map((transaction) => ({
      ...transaction,
      date: transaction.date.toISOString()
    }))
    
    localStorage.setItem('transactions', JSON.stringify(transactionToStore))
  }, [transactions])
  
  const addNewTransaction = (newTransaction) => {
    // Convert the date of the new transaction to a string before adding it to state
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };
  
  const deleteTransaction = (transactionID) => {
    setTransactions((prevTransactions) => {
      let deleteFilter = prevTransactions.filter((t) => t.id !== transactionID)
      return deleteFilter
    })
  }
  
  const editTransaction = (editedTransaction) => {
    setTransactionToEdit({ ...editedTransaction });
  };
  
  const updateTransaction = (updatedTransaction) => {
    setTransactions((prevTransactions) => {
      // Find the index of the transaction to be updated
      const updatedIndex = prevTransactions.findIndex((t) => t.id === updatedTransaction.id);
  
      if (updatedIndex !== -1) {
        // Create a new array with the updated transaction at the correct index
        const updatedTransactions = [
          ...prevTransactions.slice(0, updatedIndex), // Elements before the updated transaction
          updatedTransaction, // Updated transaction
          ...prevTransactions.slice(updatedIndex + 1), // Elements after the updated transaction
        ];
  
        return updatedTransactions;
      }
  
      return prevTransactions; // If the transaction is not found, return the existing transactions
    });
  };
  
  const expenses = transactions.filter(
    transaction => transaction.type === 'expense'
  )
  const incomes = transactions.filter(
    transaction => transaction.type === 'income'
  )
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
          <NewTransaction onAddNewTransaction={addNewTransaction} onUpdateTransaction={updateTransaction} transactionToEdit={transactionToEdit}/>
        </div>
        <div className='col-md-5'>
          <Summary expenses={expenses} incomes={incomes}/>
        </div>
      </div>
      <div className=''>
        <TransactionsList expenses={expenses} incomes={incomes} transactions={transactions} onDeleteTransaction={deleteTransaction} onEditTransaction={editTransaction}/>
      </div>
    </div>
  )
}

export default App
