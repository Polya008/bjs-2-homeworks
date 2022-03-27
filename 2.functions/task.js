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
  let max = func(arrOfArr[0]);

  for(let i = 0; i < arrOfArr.length; i++){
   max = func(arrOfArr[i]);

  if(max > arrOfArr[i]) {
    max = arrOfArr[i];
  }
  return max;
}
}

// Задание 3
function worker2(arr) {
  let min2 = arr[0];
  let max2 = min2;
  for(let i = 0; i < arr.length; i++){
  if(arr[i] > max2){
    max2 = arr[i];
  } else if(arr[i] < min2){
    min2 = arr[i];
 }
  return Math.abs(max2 - min2);
 }

}
