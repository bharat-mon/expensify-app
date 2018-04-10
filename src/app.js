import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import storeConfig from './store/storeConfig';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import selectExpenses from './selectors/selectExpenses';
import AppRouter from './routers/AppRouter';

const store = storeConfig();

store.dispatch(addExpense({ description: 'Water Bill', note: 'Water bill payment for the month of April', amount: 50000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', note: 'Gas bill payment for the month of April', amount: 10000, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', note: 'Rent payment for the month of April', amount: 95000, createdAt: 3000 }));

const state = store.getState();
const visibleExpenses = selectExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));