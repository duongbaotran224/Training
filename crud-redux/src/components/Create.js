import React from 'react';
import { Link } from 'react-router-dom'
import { addUser } from '../actions'
import { connect } from 'react-redux'
import {validation} from './Validate.js'
import style from '../style.js'

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
      id: makeID(),
      name: '',
      birthday: '',
      country: '',
      email: '',
      phone: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    const {name, birthday, email, phone} = this.state
    e.preventDefault()
    if(!name || !birthday || !email) {
      alert("Name, Birthday and Phone must be filled out");
    }
    else if(validation(email, birthday, phone)){
      alert("invalid input")
    }
    else {
      this.props.dispatch(addUser(this.state))
      this.props.history.goBack()
    }
  }

  render() {
    return (
      <div style={style.container}>
      <h1>Create</h1>
      <form style={style.form}>
      <input  name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.name}>
      </input>
      <input  name="birthday"
              placeholder="Birthday"
              onChange={this.handleChange}
              value={this.state.birthday}>
      </input>
      <input  name="country"
              placeholder="Country"
              onChange={this.handleChange}
              value={this.state.country}>
      </input>
      <input  name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}>
      </input>
      <input  name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
              value={this.state.phone}>
      </input>
      <button onClick={this.onSubmit}>Submit</button>
      <button><Link to="/">Back</Link></button>
      </form>
      </div>
    );
  }
}

export default connect()(Create);
