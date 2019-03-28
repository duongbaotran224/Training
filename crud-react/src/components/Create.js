import React from 'react';
import { Link } from 'react-router-dom'

function makeID() {
  var text_id = '';
  var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++){
    text_id += character.charAt((Math.floor(Math.random() * character.length)))
  }
  return text_id
}

class Create extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userForm: {
        id: makeID(),
        name: {
          value: ''
        },
        birthday: {
          value: ''
        }
      },
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const prevState = this.state.userForm
    const newState = {
      [e.target.name]: {
        value: e.target.value
      }
    }
    this.setState({
      userForm: {
        ...prevState,
        ...newState,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const userFormNew = this.state.userForm
    let localList = this.props.getUserList()
    localList.push(userFormNew)
    this.props.writeLocal()
    this.props.history.goBack()
    // this.props.history.push('/')
    // console.log(this.state.userList, JSON.stringify(this.state.userList))
  }

  render() {
    return (
      <div>
      <h1>Create</h1>
      <form>
      <input  name="name"
              onChange={this.handleChange}
              value={this.state.userForm.name.value}>
      </input>
      <input  name="birthday"
              onChange={this.handleChange}
              value={this.state.userForm.birthday.value}>
      </input>
      <button onClick={this.handleSubmit}>Submit</button>
      <button><Link to="/">Back</Link></button>
      </form>
      </div>
    );
  }
}

export default Create;
