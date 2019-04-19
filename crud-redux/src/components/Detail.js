import React from 'react';
import { Link } from 'react-router-dom'

class Edit extends React.Component {
  render() {
    const style = {
      wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexGrow: 1
      },
      image: {
        width: '100px',
        height: '100px',
        background: '#d2d2d2'
      },
      info: {
        width: '70%',
        boxSizing: 'border-box',
        marginLeft: '2%',
      }
    }


    // console.log(this.props.getUser(this.props.match.params.id))
    const id = this.props.match.params.id
    const getUser = (id) => {
      let user = this.props.data.find(item => item.id == id)
      return user
    }
    const data = getUser(id)
    return (
      <div>
        <h1>Detail</h1>
        <div style={style.wrap}>
          <img style={style.image}></img>
          <div style={style.info}>
            <div>{data.name}</div>
            <div>{data.birthday}</div>
            <button><Link to={`/edit/${id}`}>Update</Link></button>
            <button><Link to="/">Back</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit;
