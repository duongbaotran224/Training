import React from 'react';
import { Link } from 'react-router-dom'

class Detail extends React.Component {
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

    const id = this.props.match.params.id
    const data = this.props.getUser(id)
    return (
      <div>
        <h1>Detail</h1>
        <div style={style.wrap}>
          <img style={style.image}></img>
          <div style={style.info}>
            <div>{data.name}</div>
            <div>{data.birthday}</div>
            <div>{data.country}</div>
            <div>{data.email}</div>
            <div>{data.phone}</div>
            <button><Link to={`/edit/${id}`}>Update</Link></button>
            <button><Link to="/">Back</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail;
