import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Create from './Create'
import Home from './Home'

const App = ({store}) => {
  console.log(store)
    return (
      <div>
        <Switch>
          <Route exact path='/' render={props => <Home {...props}/>}/>
          <Route path='/create' render={props => <Create {...props}/>}/>
        </Switch>
      </div>
    )
}

export default App
