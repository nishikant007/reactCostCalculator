import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './Expensedate';
import Card from '../UI/Card';


const ExpenseItem = (props)=>{

    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("Updated Title");
        console.log("clicked...!!");
    };
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <div>
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card>
    );
}

export default ExpenseItem;