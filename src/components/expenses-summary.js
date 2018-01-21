import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({expensesCount, expensesTotal}) => (
    <div>
        {expensesCount !== 0 && <h2>Viewing {expensesCount} expenses totalling {numeral(expensesTotal / 100).format('$0,00.00')}</h2>}
    </div>
);

const mapStateToProps = (state) => {
    let filteredExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: selectExpensesTotal(filteredExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);