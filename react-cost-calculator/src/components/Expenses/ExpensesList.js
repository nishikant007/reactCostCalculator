import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = props => {

    if(props.data.length == 0 ) return (
        <p className="expenses-list__fallback">No Expenses Found</p>
        )
    return(
        props.data.map((item) => (            
        <ExpenseItem
            key={item.id}
            title={item.expenseTitle}
            date={item.expenseDate}
            amount={item.expenseAmount}
          />)  

    ))
}

export default ExpensesList;