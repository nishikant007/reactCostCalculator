import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from '../src/components/NewExpense/NewExpense';
const App = ()=> {

  const expenses = [

    { expenseDate: new Date(2021, 2, 28), expenseTitle: 'Car Insurence', expenseAmount: 294.97 },
    { expenseDate: new Date(2021, 3, 28), expenseTitle: 'truck Insurence', expenseAmount: 394.97 },
    { expenseDate: new Date(2021, 4, 28), expenseTitle: 'Cycle Insurence', expenseAmount: 494.97 },
    { expenseDate: new Date(2021, 5, 28), expenseTitle: 'Bike Insurence', expenseAmount: 274.97 }
  ]

  return (
    <div>
          <NewExpense/>
    <Expenses data={expenses}/>
    </div>

  );
}

export default App;
