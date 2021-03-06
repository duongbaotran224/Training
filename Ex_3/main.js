class Shape {
  constructor(type){
    this.type = type
  }
  getArea() {
    return "Desire:"
  }
}

class Triangle extends Shape {
  constructor(a, b, c){
    super()
    this.type = "triangle"
    this.a = a
    this.b = b
    this.c = c
  }
 getArea() {
   const p = (this.a + this.b + this.c)/2
   const n = p * (p - this.a) * (p - this.b) * (p - this.c)
   const S = `${super.getArea()} ${Math.sqrt(n)}`
   console.log(S)
 }
}

class Rectangle extends Shape {
  constructor(a, b){
    super()
    this.type = "rectangle"
    this.a = a
    this.b = b
  }
 getArea() {
   const S = `${super.getArea()} ${this.a * this.b}`
   console.log(S)
 }
}

class Square extends Shape {
  constructor(a) {
    super()
    this.type = "square"
    this.a = a
  }
  getArea(){
    const S = `${super.getArea()} ${this.a * this.a}`
    console.log(S)
  }
}
