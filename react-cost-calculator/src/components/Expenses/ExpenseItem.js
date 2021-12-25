import './ExpenseItem.css';
import ExpenseDate from './Expensedate';
import Card from '../UI/Card';
function ExpenseItem(props){


    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <div>
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
        </div>
    </Card>
    );
}

export default ExpenseItem;