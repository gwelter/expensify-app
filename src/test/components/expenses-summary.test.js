import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/expenses-summary';

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={240}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={1231241241}/>);
    expect(wrapper).toMatchSnapshot();
});