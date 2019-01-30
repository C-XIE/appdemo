import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './network'

import Framework7 from 'framework7/framework7.esm.bundle';

import Framework7React from 'framework7-react';
import 'framework7/css/framework7.min.css';

import 'framework7-icons'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer.js';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/saga'

const sagaMiddleware = createSagaMiddleware()

Framework7.use(Framework7React);

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
