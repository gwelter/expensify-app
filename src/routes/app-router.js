import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/add-expense-page';
import EditExpensePage from '../components/edit-expense-page';
import ExpenseDashboardPage from '../components/expense-dashboard-page';
import Header from '../components/header'
import HelpExpensePage from '../components/help-expense-page';
import NotFoundPage from '../components/not-found-page';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;