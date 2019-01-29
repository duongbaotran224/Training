export default class Data {
  constructor() {
    this.list_users = []
  }
  createUser(user) {
    this.list_users.push(user)
  }
  deleteUser(id_user) {
    const removeItem = this.list_users.map(item => item.id).indexOf(id_user)
    this.list_users.splice(removeItem, 1)
  }
  getUser(id_user) {
    const queryUser = this.list_users.filter(item => item.id === id_user)
    return queryUser[0]
  }
  getAllUser() {
    return this.list_users
  }
  updateUser(user) {
    const user_info = this.getUser(user.id)
    for(var props in user_info){
      user_info[props] = user[props]
    }
  }
  writeLocal() {
    localStorage.setItem('list_users', JSON.stringify(this.list_users))
  }
}
