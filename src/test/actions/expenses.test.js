import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should remove expense action objet', () => {
    const action = removeExpense({id: '123abc'});
    
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should edit a expense', () => {
    const note = 'New note value';
    const action = editExpense('abc123', note);

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: note
    });
});

test('should set up add expense action with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: '150000',
        createdAt: 1000,
        note: 'This was last month rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense action with default values', () => {    
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});