import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import Detail from './Detail'


class Main extends React.Component {
  constructor(props){
    super(props)
    var parse_list = JSON.parse(localStorage.getItem('list_users'))
    this.state = {
      userList: parse_list ? parse_list : []
    }
  }

  writeLocal = () => {
    // console.log(this.state.userList)
    localStorage.setItem('list_users', JSON.stringify(this.state.userList))
  }

  getUserList = () => {
    return this.state.userList
  }
  createUser = (user) => {
    let newList = this.state.userList.push(user)
    this.setState((state) => (
      {
        ...state.userList,
        ...newList
      }
    ))
  }
  deleteUser = (id) => {
    let newList = this.state.userList.filter((item) => {
      return (
        item.id !== id
      )
    })
    // console.log(newList)
    this.setState((state)=>(
      {
        userList: newList,
      }
    ))
    localStorage.setItem('list_users', JSON.stringify(newList))
  }
  getUser = (id) => {
    let user = this.state.userList.filter((item) => {
      return (
        item.id == id
      )
    })
    return user[0]
  }

  render(){
    // console.log(this.state.userList)
    return (
      <div>
      <Switch>
      <Route
        exact path='/'
        render={props => <Home {...props} getUserList={this.getUserList}
        writeLocal={this.writeLocal}
        deleteUser={this.deleteUser}
        />}
      />
      <Route
        path='/create'
        render={props => <Create {...props} getUserList={this.getUserList}
        writeLocal={this.writeLocal}/>}
        />
      <Route
        path='/edit/:id'
        render={props => <Edit {...props} getUser={this.getUser}
        writeLocal={this.writeLocal}
        />}
      />
      <Route path='/detail/:id'
        render={props => <Detail {...props} getUser={this.getUser}/>}
      />
      </Switch>
      </div>
    )
  }
}

export default Main
