import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers'
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer)

render(
 <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </Provider>,
 document.getElementById('root')
)
