import React from 'react';
import { Link } from 'react-router-dom'
import { updateUser } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Edit extends React.Component {
  constructor(props){
    super(props)
    const getUser = (id) => {
      let user = props.data.find(item => item.id == id)
      return user
    }
    const id = props.match.params.id

    this.state = {
      id: id,
      name: getUser(id).name ,
      birthday: getUser(id).birthday
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
    this.props.dispatch(updateUser(this.state))
    this.props.history.goBack()
  }

  render() {
  console.log(this.props, this.state)
    return (
      <div>
      <h1>Edit</h1>
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

export default connect()(Edit);
