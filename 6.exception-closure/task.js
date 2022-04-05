function parseCount(value){
  let number = Number.parseInt(value);
  if(isNaN(number)) {
    const err = new Error('Невалидное значение');
    throw err;
  } 
    return number;
}


function validateCount(value) {
    try {
      return parseCount(value);
    } catch (err) {
      return err;
    }
}

  
//Задание 2
 class Triangle{
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

     if(sideA + sideB < sideC ||
        sideA + sideC < sideB ||
        sideC + sideB < sideA) {
      throw new Error('Треугольник с такими сторонами не существует');
        }
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  getArea(){
    let halfPerimeter = this.getPerimeter() * 0.5;
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC));
    return parseFloat(area.toFixed(3));
  }

}


function getTriangle(sideA, sideB, sideC) {
    try {
      return new Triangle(sideA, sideB, sideC);
  } catch(error) {
      return {
         getPerimeter() {
           'Ошибка! Треугольник не существует';
          },
          getArea()  {
           'Ошибка! Треугольник не существует';
          } 
        }
      }
    }



