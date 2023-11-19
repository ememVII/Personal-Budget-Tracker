import './TransactionDate.css'

function TransactionDate({date}) {
  
  if (!date || !(date instanceof Date)) {
    return null;
  }
    
    const day = date.toLocaleString('en-US', {day: '2-digit'})
    const month = date.toLocaleString('en-Us', {month: 'long'})
    const year = date.getFullYear()
    
  return (
    <div className="transaction-date">
      <div className="transaction-date__month">{month}</div>
      <div className="transaction-date__day">{day}</div>
      <div className="transaction-date__year">{year}</div>
    </div>
  )
}

export default TransactionDate
