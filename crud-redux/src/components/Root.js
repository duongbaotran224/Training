import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import { Switch, Route } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Edit from './Edit'

const Root = ({store}) => {
  console.log(store.getState().users)
  return (<Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} data={store.getState().users}/>}/>
        <Route path='/create' render={props => <Create {...props}/>}/>
        <Route path='/edit/:id' render={props => <Edit {...props} data={store.getState().users}/>}/>
      </Switch>
    </Router>
  </Provider>)
}

export default Root;
