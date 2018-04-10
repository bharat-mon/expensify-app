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

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));