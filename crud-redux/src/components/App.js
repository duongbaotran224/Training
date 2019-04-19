import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Edit from './Edit'
import Detail from './Detail'

const App = ({store}) => {
  const getUser = (id) => {
    let list_users = store.getState().users
    let user = list_users.find(item => item.id == id)
    return user
  }

  return (
    <div>
      <Switch>
      <Route exact path='/' render={props => <Home {...props}/>}/>
      <Route exact path='/create' render={props => <Create {...props}/>}/>
      <Route path='/edit/:id' render={props => <Edit {...props} getUser={getUser}/>}/>
      <Route exact path='/detail/:id' render={props => <Detail {...props} getUser={getUser}/>}/>
      </Switch>
    </div>
  )
}


export default App
