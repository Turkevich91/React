import { useState } from 'react'
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            id: Math.random().toString(), // not good for production, but for example only
            ...enteredExpenseData,
        }
        props.onAddExpanse(expenseData)
        console.log(props.test)
    }

    const [form, setForm] = useState(<button onClick={expandForm}>Add new expense</button>)


    function expandForm() {
        setForm(<ExpenseForm collapseForm={collapseForm} onSaveExpenseData={saveExpenseDataHandler} />)
    }

    function collapseForm(){
        setForm(<button onClick={expandForm}>Add new expense</button>)
    }

    return(
        <div className="new-expense">
            {/*<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />*/}
            {form}
        </div>
    )
}

export default NewExpense