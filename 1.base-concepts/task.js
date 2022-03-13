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
  return (`Параметр ${percentNumber} содержит неправильное значение ${percentNumber}`);
} else if(Number.isNaN(contributionNumber)){
  return (`Параметр ${contributionNumber} содержит неправильное значение ${contributionNumber}`);
} else if(Number.isNaN(amountNumber)){
  return (`Параметр ${amountNumber} содержит неправильное значение ${amountNumber}`);
}


//вычисление кол-ва месяцев
let dayToday =  Date.now();
let diffirenceInMonth;

function creditPeriod(a,b) {
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let diffirenceInYears = date.getFullYear - currentYear;
let diffirenceInMonth = diffirenceInYears * 12 - currentMonth + b.getMonth();
return  diffirenceInMonth;
}
creditPeriod(dayToday, date)
  

let P = (percentNumber / 100) * 12;
let totalSum = creditSum * (P + (P / (((1 + P) ^ diffirenceInMonth)- 1 )));

totalSum.toFixed(2);
totalAmount = parseFloat(totalSum);

  console.log(totalAmount);
  return totalAmount;
}
