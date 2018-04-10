import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
