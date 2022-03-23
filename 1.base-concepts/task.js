'use strict';

function solveEquation(a,b,c){
  let result = [];
  let discriminant = b ** 2 - 4 * a * c;
  
 if(discriminant < 0){
    result;
 } else if(discriminant === 0){
    return [-b / (2*a)];
  } else {
    return [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
   }
  return result;
}



function calculateTotalMortgage(percent, contribution, amount, date) {
let totalAmount;

let percentNumber = parseInt(percent);
let contributionNumber = parseInt(contribution);
let amountNumber = parseInt(amount);

let creditSum = amountNumber - contributionNumber;

if(Number.isNaN(percentNumber)){
  return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
} else if(Number.isNaN(contributionNumber)){
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
} else if(Number.isNaN(amountNumber)){
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
}


//вычисление кол-ва месяцев
let dayToday =  Date.now();//1647721587970
let dayEnd = date.getTime();//1678579200000
let diffirenceInMonth;

function creditPeriod(a,b) {
diffirenceInMonth = Math.round((dayEnd - dayToday) * (3.8 * (10 ** -10)));
return  diffirenceInMonth;
}
creditPeriod(dayToday, dayEnd)
  
let P = percentNumber / 12 / 100;
let sumFoEveryMonth = creditSum * (P + (P / (((1 + P) ** diffirenceInMonth)- 1 ))); 
let totalSum = sumFoEveryMonth * diffirenceInMonth;
let totalSumString = totalSum.toFixed(2);
totalAmount = parseFloat(totalSumString);

return totalAmount;
}
