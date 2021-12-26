import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import Expenseschart from './ExpensesChart';
const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020');

  const YearSelectHandler = (yearFilter) => {
    console.log(yearFilter);
    setSelectedYear(yearFilter);

  }




  const filteredExpenseList = props.data.filter(item => item.expenseDate.getFullYear() == selectedYear);

  let expensetemplate = <p>No Result Found</p>;
  if (filteredExpenseList.length > 0) {
    expensetemplate = filteredExpenseList.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.expenseTitle}
        date={item.expenseDate}
        amount={item.expenseAmount}
      />))
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selectedyear={selectedYear} onYearSelection={YearSelectHandler} />

<Expenseschart expenses={filteredExpenseList}/>
      <ExpensesList data={filteredExpenseList}/>


    </Card>

  );
}

export default Expenses;