import moment from 'moment';
import filtersReducer from "../../reducers/filters";

test('should setup default test values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should change sort value to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should change sort value to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Coffe' });
    expect(state.text).toBe('Coffe');
});

test('should set startDate filter', () => {
    const date = moment().add(2, 'days');
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: date });
    expect(state.startDate).toBe(date);
});

test('should set endDate filter', () => {
    const date = moment().subtract(2, 'days');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: date });
    expect(state.endDate).toBe(date);
});