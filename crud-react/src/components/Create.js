import React from 'react';
import { Link } from 'react-router-dom'


class Create extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userForm: {
        id: Math.random(),
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
    this.props.history.push('/')
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
