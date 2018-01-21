import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import AppRouter from './routes/app-router';
import ConfigureStore from './store/configure-store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = ConfigureStore();

store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: moment().add(2, 'days').valueOf()}));
store.dispatch(addExpense({description: 'Coffe', amount: 200, createdAt: moment().subtract(2, 'days').valueOf()}));
store.dispatch(addExpense({description: 'Water Bill', amount: 1200, createdAt: moment().valueOf()}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
