import Card from '../UI/Card/Card'
import './Summary.css'

function Summary({ expenses, incomes }) {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  )
  const totalIncome = incomes.reduce(
    (total, incomes) => total + incomes.amount,
    0
  )
  const balance = totalIncome - totalExpenses

  return (
    <div className="">
      <Card className="summary">
        <h3 className="alert alert-success">Total income: {totalIncome} $</h3>

        <h3 className="alert alert-danger">Total Expense: {totalExpenses} $</h3>

        <h3 className="alert alert-primary">Balance: {balance} $</h3>

        {balance > 0 ? (
          <div className="alert alert-success text-center" role="alert">
            <hr />
            <h5>Your Balance is Sufficient</h5>
            <hr />
          </div>
        ) : balance < 0 ? (
          <div className="alert alert-danger text-center" role="alert">
            <hr />
            <h5>Your Balance is insufficient</h5>
            <hr />
          </div>
        ) : <div className="alert alert-dark text-center" role="alert">
        <hr />
        <h5>Your Balance: </h5>
        <hr />
      </div>}
      </Card>
    </div>
  )
}

export default Summary
