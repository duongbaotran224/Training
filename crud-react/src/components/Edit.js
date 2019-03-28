import React from 'react';
import { Link } from 'react-router-dom'


class Edit extends React.Component {
  constructor(props){
    super(props)
    const data = this.props.getUserList()
    const id = this.props.match.params.id
    this.state = {
      userForm: {
        id: data[id].id,
        name: {
          value: data[id].name.value
        },
        birthday: {
          value: data[id].birthday.value
        }
      }
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
    console.log(prevState, newState)
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
    const id = this.props.match.params.id
    const old_user_info = this.props.getUserList()[id]
    for (var props in old_user_info) {
      old_user_info[props] = userFormNew[props]
    }
    // console.log(old_user_info)
    this.props.writeLocal()
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <h1>Edit</h1>
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

export default Edit;
