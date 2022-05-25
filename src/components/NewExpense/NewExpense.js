import { useState } from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const onSaveExpenseDataHandler = (eneterdExpenseData) => {
        const expenseData = {...eneterdExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowExpenseForm(false); // hide the form on submit success
    }
    const setExpenseFormHandler = () => {
        setShowExpenseForm(true)
    }
    const unsetExpenseFormHandler = () => {
        setShowExpenseForm(false)
    }

    let expenseFormContent = <button onClick={setExpenseFormHandler}> Add New Expense</button>
    if (showExpenseForm){
        expenseFormContent = <ExpenseForm onCancelExpenseForm={unsetExpenseFormHandler}
                                          onSaveExpenseData={onSaveExpenseDataHandler} />
    }
    return <div className="new-expense">
            {expenseFormContent}
        </div>
}

export default NewExpense;