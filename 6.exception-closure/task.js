function parseCount(value){
  let number = Number.parseInt(value);
  if(isNaN(number)) {
    throw new Error('Невалидное значение');
  } else {
    return Number.parseInt(value);
  }
}


function validateCount(value) {
  let a = parseCount(value);
  if(typeof a === 'number') {
    return a;
  } else {
    return 'Error';
}


  try{
      validateCount(value)
    }catch(Error) {
      throw new Error ('ErroR!!!!');
    }finally {
    console.log('Конец!')
  }

}

  

//Задание 2
 class Triangle{
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

     if(this.sideA + this.sideB < this.sideC ||
        this.sideA + this.sideC < this.sideB ||
        this.sideC + this.sideB < this.sideA) {
      throw new Error('Треугольник с такими сторонами не существует');
        }
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  getArea(){
    let halfPerimeter = this.getPerimeter() * 0.5;
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC));
    return Math.floor(area * 1000) / 1000;
  }

}


function getTriangle(A,B,C) {
 const triangle1 = new Triangle(a,b,c);
    try {
      return triangle1;
  } catch(error) {
     return triangle1 {
        getPerimeter() {
          throw new Error('Ошибка! Треугольник не существует');
          }
        getArea(){
          throw new Error('Ошибка! Треугольник не существует');
      }
     }
    }
  } 



