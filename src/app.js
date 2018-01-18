import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/app-router';
import ConfigureStore from './store/configure-store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = ConfigureStore();

store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: -1000}));
store.dispatch(addExpense({description: 'Coffe', amount: 200, createdAt: 1000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
