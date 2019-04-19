const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const validatePhone = (phone) => {
  var re = /(09|01[2|6|8|9])+([0-9]{8})\b/g;
  return re.test(phone);
}


const validateBirthday = (birthday) => {
  var re = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  return re.test(birthday);
}

export const validation = (email, birthday, phone) => {
  if(validateEmail(email) && validatePhone(phone) && validateBirthday(birthday)) {
    return false
  }
  return true
}
