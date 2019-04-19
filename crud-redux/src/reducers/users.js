const initList = [
  {
    id: '1',
    name: 'Tran',
    birthday: '22/04/1995'
  }
]

const users = (state =  initList, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          birthday: action.birthday,
          country: action.country,
          email: action.email,
          phone: action.phone,
        }
      ]

    case 'DELETE_USER':
      return [
        ...state.filter((item) => item.id !== action.id)
      ]

    case 'UPDATE_USER':
      const updatedUser = state.map(item => {
        if(item.id === action.id) {
          return {
            ...item,
            ...action.updated_infos
          }
        }
        return item
      })
      return [
        ...updatedUser
      ]

    default:
    return state
  }
}

export default users
