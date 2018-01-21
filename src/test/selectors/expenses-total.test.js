import expensesTotal from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses';

test('should return 0 for where there is not expenses', () => {
    const result = expensesTotal();
    expect(result).toBe(0);
});

test('should return the amount of one expense for where there is just one expense', () => {
    const result = expensesTotal([expenses[1]]);
    expect(result).toBe(expenses[1].amount);
});


test('should return the total amount when passing all expenses', () => {
    const result = expensesTotal(expenses);
    expect(result).toBe(6000);
});