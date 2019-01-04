// 1.a

a = function(p){
  ans= ''
  for(i = 0; i < p; i++){
    ans += "*"
    console.log(ans)
  }
}

// 1.b

create_star = function(m){
  ans = ''
  for(j=0; j < m; j++){
    ans = ans + "*"
  }
  console.log(ans)
}

b = function(n){
  for(i=0; i < n ; i++){
    create_star(n)
  }
}
// 1.b - cach 2
b = function(n){
  ans = '\n'
  for(i=1; i <= n ; i++){
    star = "*"
    ans += star.repeat(n) + '\n'
  }
  console.log(ans)
}


// 1.c
c = function(n){
 for(i=n; i > 0; i--){
   ans = ''
   for(j=0; j<i; j++){
     ans = ans + "*"
   }
   console.log(ans)
 }
}
//1.c - cach 2
c = function(n){
  ans = '\n'
  for(i=n; i > 0; i--){
    star = "*"
    ans += star.repeat(i) + '\n'
  }
  console.log(ans)
}

// 3
calculate_cost = function(n){
  ans = ''
  if(n < 50){
    ans = n * 2000
  }
  else if(50 < n < 100) {
    ans = (50 * 2000) + (n - 50) * 1800
  }
  else if (100 < n < 200) {
    ans = (50 * 2000) + (50 * 1800) + (n - 100) *1500
  }
  ans = (50 * 2000) + (50 * 1800) + (100 * 1500) + ((n-200)*1400)
  return(ans)
}

// 4

calculate_quadratic = function(a, b, c){
  const delta = b*b - 4*a*c
  if(a == 0) {
    console.log('Very simple =))')
  }
  else if(delta < 0) {
    console.log('No result')
  }
  else if(delta == 0) {
    x = -b/(2*a)
    return x
  }
  else (delta > 0) {
    sqrt_delta = Math.sqrt(delta)
    x1 = (-b + sqrt_delta)/(2*a)
    x2 = (-b - sqrt_delta)/(2*a)
    return {
      x1: x1,
      x2: x2
    }
  }
}

//5
reverse_num = function(num){
  ans = ''
  res = num.toString()
  for(i = res.length; i >= 0; i--){
   last_num = res.substr(i, 1)
   ans += last_num
  }
  return(ans)
}
