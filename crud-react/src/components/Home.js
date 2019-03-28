import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Create from './Create.js'


class Home extends React.Component {

  handleDelete = (id) => {
    this.props.deleteUser(id)
  }

  gotoDetails = (id) => {
    this.props.history.push(`/detail/${id}`)
  }

  render() {
    // console.log(this.props.getUserList())
    let data = this.props.getUserList()

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
          data.map((item, index)=>{
            return (
              <tr key={item.id} onClick={() => this.gotoDetails(item.id)}>
                <td>{index + 1}</td>
                <td>{item.name.value}</td>
                <td>{item.birthday.value}</td>
                <td>
                <button><Link to={`/edit/${index}`}>Update</Link></button>
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

export default Home;
