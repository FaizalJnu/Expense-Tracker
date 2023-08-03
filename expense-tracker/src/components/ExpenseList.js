import React from "react";
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 12123, name: "Shopping", cost: 50},
        { id: 12123, name: "Home", cost: 300},
        { id: 12123, name: "Transport", cost: 700},
        { id: 12123, name: "food", cost: 250},
        { id: 12123, name: "Misc", cost: 10},
    ];

    return (
        <ul>
            {expenses.map((expense)=>(
                <ExpenseItem 
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}             
                />
            ))}
        </ul>
    );
};

export default ExpenseList;