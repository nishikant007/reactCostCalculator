import ExpenseItem from "./ExpenseItem";

function Expenses(props){

 
      return (
        <div >
        
        <ExpenseItem title={props.data[0].expenseTitle}
          date={props.data[0].expenseDate}
          amount={props.data[0].expenseAmount} />
        <ExpenseItem title={props.data[1].expenseTitle}
          date={props.data[1].expenseDate}
          amount={props.data[1].expenseAmount} />
        <ExpenseItem title={props.data[2].expenseTitle}
          date={props.data[2].expenseDate}
          amount={props.data[2].expenseAmount} />
  
      </div>

      );
}

export default Expenses;