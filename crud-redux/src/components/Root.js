import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'

const Root = ({store}) => {

  return (<Provider store={store}>
    <Router>
      <App store={store}/>
    </Router>
  </Provider>)
}

export default Root;
