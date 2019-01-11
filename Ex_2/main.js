
function isInt(...args) {
  for(let i = 0; i < args.length; i++){
    var ans = Number.isInteger(args[i])
    if (!ans) {
      throw Error('Number is not integer')
    }
  }
}

function isValidation(b1, w1, b2, w2, ground) {
  isInt(b1, w1, b2, w2, ground)
  check_b1 = 99 < b1 < 999 ? true : false
  check_w1 = 0 <= w1 <= 3 ? true : false
  check_w2 = 0 <= w2 <= 3 ? true : false
  check_b2 = 1 < b2 < 888 ? true : false
  check_ground = 1 < ground < 999 ? true : false
  if(!((check_b1 && check_b2) && (check_w1 && check_w2 && check_ground))) {
    throw Error('It is not valid input')
  }
}

function isPrime(num) {
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true
}

function calc_Real (base, wp, ground) {
  var ans = 1
  if (ground === base && wp === 0) {
    x = Math.floor(base/10)
    ans = x + (x * 0.1)
  }
  else if (ground === base && 0 < wp <= 3) {
    ans = base + (base * 0.1)
  }
  else if(ground !== base && wp === 0){
    ans = Math.floor(base/10)
  }
  else if(ground !== base && 0 < wp <= 3){
    ans = base
  }
  else ans = null
  return ans
}

function main(baseHP1, wp1, baseHP2, wp2, ground) {

  //check input
  isValidation(baseHP1, wp1, baseHP2, wp2, ground)

  var result = 1

  //xet truong hop co hay khong co vu khi & loi the dia hinh
  const real_1 = calc_Real(baseHP1, wp1, ground)
  const real_2 = calc_Real(baseHP2, wp2, ground)

  // xet cac truong hop dac biet tra thang ket qua
  if(baseHP1 === 999){
    result = 1
  }
  else if (baseHP2 === 888 && 99 < baseHP1 < 999) {
    result = 0
  }
  else if (isPrime(baseHP1) && isPrime(baseHP2)) {
    result = 0.5
  }
  else if (isPrime(baseHP1) && !isPrime(baseHP2)) {
    result = 0.01
  }
  else if (isPrime(baseHP2) && !isPrime(baseHP1)) {
    result = 0.99
  }

  // tinh realHP dua tren cac loai vu khi dac biet
  else if (wp1 === 3) {
    realHP_1 = (real_1 * 2) > 999 ? 999 : real_1 * 2
    realHP_2 = real_2
    result = (realHP_1 - realHP_2 + 999)/2000
  }
  else if ((wp1 === 2 && real_1 < real_2) || (wp2 === 2 & real_2 < real_1)) {
    result = 0.5
  }

  else result = (real_1 - real_2 + 999)/2000
  return result.toFixed(2)
}
