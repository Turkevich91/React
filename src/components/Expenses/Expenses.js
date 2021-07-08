import React, { useState } from 'react'
import ExpenseItem from "./Expenseitem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    function filterChangeHandler(chosenYear) {
        setFilteredYear(chosenYear)
        console.log('chosen year: ', chosenYear)
    }

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            </div>
            {props.items.map(item => ( // how loop looks like in JSX
                <ExpenseItem key={Math.random()} title={item.title} amount={item.amount} date={item.date} />
                //https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx
                // https://sentry.io/answers/unique-key-prop/ - explanation of importance of "key" values
            ))}

            {/*<ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>*/}
            {/*<ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>*/}
            {/*<ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>*/}
            {/*<ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>*/}
        </Card>
    )
}

export default Expenses