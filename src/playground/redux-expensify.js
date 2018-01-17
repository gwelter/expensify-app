import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

import {addExpense, editExpense, removeExpense} from '../actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import filtersReducer from '../reducers/filters';
import expensesReducer from '../reducers/expenses';
import getVisibleExpenses from '../selectors/expenses';

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffe', amount: 200, createdAt: 1000}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('coffe'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate());
store.dispatch(setEndDate(-1001));