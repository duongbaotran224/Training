class Data {
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

////////////////////////////////////

var data = new Data()

function makeID () {
  var text_id = '';
  var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++){
    text_id += character.charAt((Math.floor(Math.random() * character.length)))
  }
  return text_id
}

function apiRenderAll() {
  const all_users = data.getAllUser()

  for (let i = 0; i < all_users.length; i++) {
    var tr = document.createElement('tr');
    tr.onclick = () => apiGoToDetail(all_users[i].id_user)
    var td_num = document.createElement('td');
    var td_name = document.createElement('td');
    var td_birthday = document.createElement('td');
    var td_action = document.createElement('td');
    var numText = document.createTextNode(i + 1);
    var nameText = document.createTextNode(all_users[i].name);
    var birthdayText = document.createTextNode(all_users[i].birthday);
    var button_up = document.createElement('button');
    var button_up_text = document.createTextNode('Update');
    button_up.id = "update"
    button_up.onclick = () => apiGoToEdit(all_users[i].id_user)
    var button_del = document.createElement('button');
    var button_del_text = document.createTextNode('Delete');
    button_del.id = "delete"
    button_del.onclick = () => apiDelete(all_users[i].id_user)

    td_num.appendChild(numText);
    td_name.appendChild(nameText);
    td_birthday.appendChild(birthdayText);
    td_action.appendChild(button_up);
    td_action.appendChild(button_del);
    button_up.appendChild(button_up_text);
    button_del.appendChild(button_del_text);

    tr.appendChild(td_num)
    tr.appendChild(td_name)
    tr.appendChild(td_birthday)
    tr.appendChild(td_action)

    document.getElementById('myID').appendChild(tr);
  }
}

function apiCreate() {
  const inp_name = document.getElementById("name").value
  const inp_birthday = document.getElementById("birthday").value
  const inp_country = document.getElementById("country").value
  const inp_email = document.getElementById("email").value
  const inp_phone = document.getElementById("phone").value
  const user = {
    id_user: makeID(),
    name: inp_name,
    birthday: inp_birthday,
    country: inp_country,
    email: inp_email,
    phone: inp_phone
  }
  data.createUser(user)
  data.writeLocal()
  window.history.back()
}

function apiDelete(id_user) {
  event.stopPropagation()
  var confirmDel = confirm('Are you sure?');
  if(confirmDel == true) {
    data.deleteUser(id_user)
    data.writeLocal()
    location.reload()
  }
}

function apiGoToEdit(id_user) {
  event.stopPropagation();
  const get_cur_user = data.getUser(id_user)
  localStorage.setItem('cur_user', JSON.stringify(get_cur_user))
  window.location.href = `edit.html`
}

function apiShowUser() {
  const parse_cur_user = JSON.parse(localStorage.getItem('cur_user'))
  const cur_user = parse_cur_user ? parse_cur_user : {}
  document.getElementById("name").value = cur_user["name"]
  document.getElementById("birthday").value = cur_user["birthday"]
  document.getElementById("country").value = cur_user["country"]
  document.getElementById("email").value = cur_user["email"]
  document.getElementById("phone").value = cur_user["phone"]
}

function apiUpdate() {
  const cur_user = JSON.parse(localStorage.getItem('cur_user'))
  const inp_name = document.getElementById("name").value
  const inp_birthday = document.getElementById("birthday").value
  const inp_country = document.getElementById("country").value
  const inp_email = document.getElementById("email").value
  const inp_phone = document.getElementById("phone").value
  const user = {
    id_user: cur_user['id_user'],
    name: inp_name,
    birthday: inp_birthday,
    country: inp_country,
    email: inp_email,
    phone: inp_phone
  }
  data.updateUser(user)
  data.writeLocal()
  window.history.back()
}

function apiGoToDetail(id_user) {
  const get_cur_user = data.getUser(id_user)
  localStorage.setItem('cur_user', JSON.stringify(get_cur_user))
  window.location.href = `detail.html`
}

function apiRenderUserInfo() {
  const parse_cur_user = JSON.parse(localStorage.getItem('cur_user'))
  const cur_user = parse_cur_user ? parse_cur_user : {}
  document.getElementById("name").innerText = cur_user["name"]
  document.getElementById("birthday").innerText = cur_user["birthday"]
  document.getElementById("country").innerText = cur_user["country"]
  document.getElementById("email").innerText = cur_user["email"]
  document.getElementById("phone").innerText = cur_user["phone"]
}