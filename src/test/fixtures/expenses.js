import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 1000,
        createtAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 2000,
        createtAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 3000,
        createtAt: moment(0).add(4, 'days').valueOf()
    }
]