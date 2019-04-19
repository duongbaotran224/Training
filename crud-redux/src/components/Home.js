import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUser } from '../actions'
import { withRouter } from "react-router";


class Home extends React.Component{

  handleDelete = (e, id) => {
    e.stopPropagation()
    this.props.dispatch(deleteUser(id))
  }
  gotoDetail = (id) => {
    console.log(this.props.history)
    this.props.history.push(`/detail/${id}`)
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
              <tr key={item.id} onClick={() => this.gotoDetail(item.id)}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.birthday}</td>
                <td>
                <button onClick={(e) => e.stopPropagation()}>
                  <Link to={`/edit/${item.id}`}>Update</Link>
                </button>
                <button onClick={(e) => this.handleDelete(e, item.id)}>
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

export default withRouter(connect()( Home))
