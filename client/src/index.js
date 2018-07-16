import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Router
import { Router } from 'react-router-dom';
import history from './hoc/history'; // Allows us to programmatically redirect the user, on signIn for example.

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Async from './middleware/async';
import rootReducer from './reducers/rootReducer';

import { AUTHENTICATED, LOGGED_OUT } from './actions/types';

// Create Store
const storeMiddleware = applyMiddleware(Async, reduxThunk)(createStore);
const store = storeMiddleware(rootReducer);

// Load JWT if exists
const token = localStorage.getItem('token')
if(token) {
  store.dispatch({ type: AUTHENTICATED })
} else {
  store.dispatch({ type: LOGGED_OUT })
}

ReactDOM.render(
	<Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
