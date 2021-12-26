import './App.css';
import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from '../src/components/NewExpense/NewExpense';

const initialExpenses = [

  { id: 'e1', expenseDate: new Date(2021, 2, 28), expenseTitle: 'Car Insurence', expenseAmount: 294.97 },
  { id: 'e2', expenseDate: new Date(2020, 3, 28), expenseTitle: 'truck Insurence', expenseAmount: 394.97 },
  { id: 'e3', expenseDate: new Date(2019, 4, 28), expenseTitle: 'Cycle Insurence', expenseAmount: 494.97 },
  { id: 'e4', expenseDate: new Date(2020, 5, 28), expenseTitle: 'Bike Insurence', expenseAmount: 274.97 }
]


const App = ()=> {


  const [expenses, setExpenses] = useState(initialExpenses);


  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    }

    );
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses data={expenses}/>
    </div>

  );
}

export default App;
