import React, {useState} from 'react'
import "./ExpenseForm.css"

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // }

    function titleChangeHandler(event) {
        // console.log(event.target.value)
        setEnteredTitle(event.target.value)

        // function setUserInput(prevState) {
        //     return {...prevState, enteredTitle: event.target.value }
        // }
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    function clearForm() {
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    function submitHandler(event){
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData)
        console.log(expenseData)
        clearForm()
        props.collapseForm()
    }

    function cancelForm(event) {
        event.preventDefault()
        clearForm()
        props.collapseForm()

        // collaps()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title: {enteredTitle}</label>
                    <input type="text"
                           value={enteredTitle}
                           onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount: {enteredAmount}</label>
                    <input type="number" min="0.01" step="0.01"
                           value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date: {enteredDate}</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                           value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>

            </div>
            <div className="new-expense__actions">
                <button onClick={cancelForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm