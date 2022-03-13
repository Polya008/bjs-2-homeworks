'use strict';

function solveEquation(a,b,c){
  let x;
  let result = [];
  let discriminant = b ** 2 - 4 * a * c;
  
  if(discriminant < 0){
    return result;
  } else if(discriminant === 0){
    x = -b / (2*a);
    result.push(x);
    return result;
  } else {
    x = (-b + Math.sqrt(discriminant) )/(2*a);
    result.push(x);
    x = (-b - Math.sqrt(discriminant) )/(2*a);
    result.push(x);
    return result;
  }
}






function calculateTotalMortgage(percent, contribution, amount, date) {
let totalAmount;

let percentNumber = Number(percent);
let contributionNumber = Number(contribution);
let amountNumber = Number(amount);

let creditSum = amountNumber - contributionNumber;

if(typeof percentNumber != 'number'){
  return (`Параметр ${placeholder} содержит неправильное значение ${percentNumber}`);
} else if(typeof contributionNumber != 'number'){
  return (`Параметр ${placeholder} содержит неправильное значение ${contributionNumber}`);
} else if(typeof amountNumber != 'number'){
  return (`Параметр ${placeholder} содержит неправильное значение ${amountNumber}`);
}


//вычисление кол-ва месяцев
let dayToday =  new Date();
let diffirenceInMonth;

function creditPeriod(a,b) {
const oneMonth = (1000 * 60 * 60 * 30) / 12;
a.parse;
b.parse;
let diffirence = b.getTime() - a.getTime();
diffirenceInMonth = Math.round(diffirence / oneMonth);
return diffirenceInMonth;
}
creditPeriod(dayToday, date)
  

let P = (percentNumber / 100) / 12;
let totalSum = creditSum * (P + (P / (((1 + P) ^ diffirenceInMonth)- 1 )));
totalSum.toFixed(2);

totalAmount = Number(totalSum);
  console.log(totalAmount);
  return totalAmount;
}
