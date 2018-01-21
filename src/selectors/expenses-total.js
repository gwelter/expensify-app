const getSum = (total, num) => total + num;

export default (expenses = []) => expenses.map((expense) => expense.amount).reduce(getSum, 0);