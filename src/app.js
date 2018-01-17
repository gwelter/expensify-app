import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/app-router';
import ConfigureStore from './store/configure-store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = ConfigureStore();

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffe', amount: 200, createdAt: 1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('coffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
