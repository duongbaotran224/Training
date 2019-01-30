export class Data {
  constructor() {
    var parse_list = JSON.parse(localStorage.getItem('list_users'))
    this.list_users = parse_list ? parse_list : []
  }
  createUser(user) {
    console.log(this.list_users)
    this.list_users.push(user)
  }
  deleteUser(id_user) {
    const removeItem = this.list_users.map(item => item.id_user).indexOf(id_user)
    this.list_users.splice(removeItem, 1)
  }
  getUser(id_user) {
    const queryUser = this.list_users.filter(item => item.id_user === id_user)
    return queryUser[0]
  }
  getAllUser() {
    return this.list_users
  }
  updateUser(user) {
    const user_info = this.getUser(user.id_user)
    for (var props in user_info) {
      user_info[props] = user[props]
    }
  }
  writeLocal() {
    localStorage.setItem('list_users', JSON.stringify(this.list_users))
  }
}
