import React from 'react'
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // not good for production, but for example only
        }
        props.onAddExpanse(expenseData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense