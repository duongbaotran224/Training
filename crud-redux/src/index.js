import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';
import './index.css';
import Root from './components/Root';
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(()=>{
  saveState(store.getState())
});

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
