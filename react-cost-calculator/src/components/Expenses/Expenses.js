import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
function Expenses(props){

 
      return (
        <Card className="expenses">
        
        <ExpenseItem title={props.data[0].expenseTitle}
          date={props.data[0].expenseDate}
          amount={props.data[0].expenseAmount} />
        <ExpenseItem title={props.data[1].expenseTitle}
          date={props.data[1].expenseDate}
          amount={props.data[1].expenseAmount} />
        <ExpenseItem title={props.data[2].expenseTitle}
          date={props.data[2].expenseDate}
          amount={props.data[2].expenseAmount} />
  
      </Card>

      );
}

export default Expenses;