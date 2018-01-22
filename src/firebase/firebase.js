import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA2T-raLyVdcg5OOuOO4p-4UL2TWFQvPHc",
    authDomain: "expensify-e16cf.firebaseapp.com",
    databaseURL: "https://expensify-e16cf.firebaseio.com",
    projectId: "expensify-e16cf",
    storageBucket: "expensify-e16cf.appspot.com",
    messagingSenderId: "725698965689"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Guilherme Welter'
});