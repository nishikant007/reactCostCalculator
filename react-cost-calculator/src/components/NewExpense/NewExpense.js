
import ExpenseForm from "./ExpenseForm"
import React, {useState}from 'react';
const NewExpense = (props)=>{

 const saveExpenseDataHandler = (enteredExpenseData) => {
     const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString()
     }
     console.log(expenseData);
     props.onAddExpense(expenseData);
 }
 const [isEditing, SetIsEditing]= useState(false);
const onclickButtonHandler = ()=>{
    SetIsEditing(true);
}

const stopEditingHandler = ()=>{
    SetIsEditing(false);
}
    return (
        <div className="new-expense">
{!isEditing && <button onClick={onclickButtonHandler}>Add New Expense</button>}
{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>

    )

}
export default NewExpense;