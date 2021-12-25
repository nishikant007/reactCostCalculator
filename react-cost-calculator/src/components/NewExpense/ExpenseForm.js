import './ExpenseForm.css';
import React, { useState } from 'react';
const ExpenseForm = () => {

    // let titleElement, dateElement, amountElement ;

    const [titleElement, setTitleElement] = useState('');
    const [dateElement, setDateElement] = useState('');
    const [amountElement, setAmountElement] = useState('');


    const titleChangeHandler = (event) => {
        setTitleElement(event.target.value);
        console.log(titleElement);
    }

    const amountChangeHandler = (event) => {
        setAmountElement(event.target.value);
        console.log(amountElement);
    }

    const dateChangeHandler = (event) => {
        setDateElement(event.target.value);
        console.log(dateElement);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formvalue = {
            title: titleElement,
            amount: amountElement,
            dateValue: new Date(dateElement)
        }

        console.log(formvalue);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>

                    <input type='text' onChange={titleChangeHandler} value={titleElement} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>

                    <input type='number' min="0.01" max="1000.01" onChange={amountChangeHandler} value={amountElement} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>

                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={dateElement} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;