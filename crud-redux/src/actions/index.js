
import {ADD_USER} from './const.js'
import {DELETE_USER} from './const.js'
import {UPDATE_USER} from './const.js'


export const addUser = (user) => ({
  type: ADD_USER,
  id: user.id,
  name: user.name,
  birthday: user.birthday,
})

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id
})

export const updateUser = (user) => ({
  type: UPDATE_USER,
  id: user.id,
  updated_infos: {
    name: user.name,
    birthday: user.birthday,
  }
})
