// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = min;
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
  } else if(arr[i] < min){
    min = arr[i];
  } 
  sum += arr[i];
  }
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  for(let i = 0; i < arrOfArr.length; i++){
  let oneArr = arrOfArr[i];
  return oneArr;
  let max = [];
  max =  func(oneArr);
    }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
