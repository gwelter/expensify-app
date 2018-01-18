import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);

