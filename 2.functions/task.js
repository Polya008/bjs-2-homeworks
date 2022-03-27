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
  let max = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
  let SumOfArr = func(arrOfArr[i]);
  if(max < SumOfArr) {
    max = SumOfArr;
  }
 }
return max;
}

// Задание 3
function worker2(arr) {
  let minInWorker = arr[0];
  let maxInWorker = minInWorker;
  for(let i = 0; i < arr.length; i++){
  if(arr[i] > maxInWorker){
    maxInWorker = arr[i];
  } else if(arr[i] < minInWorker){
    minInWorker = arr[i];
  }
 }
 return Math.abs(maxInWorker - minInWorker);
}
