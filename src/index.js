import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';

const store= configureStore();
const rootEl= document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);
