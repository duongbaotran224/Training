import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUser } from '../actions'

class Home extends React.Component{

  handleDelete = (id) => {
    // const newList = this.props.data.filter((item) => item.id !== id)
    this.props.dispatch(deleteUser(id))
  }

  render() {
  const data = this.props.data
    return (
      <div>
      <table id="myID"  style={{width: "100%"}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody id="myID"  style={{width: "100%"}}>
        {
          data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.birthday}</td>
                <td>
                <button onClick={(e) => e.stopPropagation()}>
                  <Link to={`/edit/${item.id}`}>Update</Link>
                </button>
                <button onClick={() => this.handleDelete(item.id)}>
                  Delete
                </button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <button><Link to="/create">Add</Link></button>
      </div>
    );
  }
}

export default connect()( Home)
