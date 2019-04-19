import React from 'react';
import { Link } from 'react-router-dom'
import { addUser } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
      birthday: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(addUser(this.state))
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
      <h1>Create</h1>
      <form>
      <input  name="name"
              onChange={this.handleChange}
              value={this.state.name}>
      </input>
      <input  name="birthday"
              onChange={this.handleChange}
              value={this.state.birthday}>
      </input>
      <button onClick={this.onSubmit}>Submit</button>
      <button><Link to="/">Back</Link></button>
      </form>
      </div>
    );
  }
}

export default connect()(Create);
