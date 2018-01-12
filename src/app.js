import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/app-router';
import 'normalize-css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));