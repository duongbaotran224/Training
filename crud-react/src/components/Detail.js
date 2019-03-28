import React from 'react';

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


    console.log(this.props.getUserDetails(this.props.match.params.id))
    const data = this.props.getUserDetails(this.props.match.params.id)
    return (
      <div>
        <h1>Detail</h1>
        <div style={style.wrap}>
          <img style={style.image}></img>
          <div style={style.info}>
            <div>{data.name.value}</div>
            <div>{data.birthday.value}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit;
