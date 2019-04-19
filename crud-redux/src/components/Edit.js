import React from 'react';
import { Link } from 'react-router-dom'
import { updateUser } from '../actions'
import { connect } from 'react-redux'
import {validation} from './Validate.js'
import style from '../style.js'


class Edit extends React.Component {
  constructor(props){
    super(props)
    const id = props.match.params.id
    this.state = {
      id: id,
      name: props.getUser(id).name,
      birthday: props.getUser(id).birthday,
      country: props.getUser(id).country,
      email: props.getUser(id).email,
      phone: props.getUser(id).phone,
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
      this.props.dispatch(updateUser(this.state))
      this.props.history.goBack()
    }
  }

  render() {
    return (
      <div style={style.container}>
      <h1>Edit</h1>
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

export default connect()(Edit);
