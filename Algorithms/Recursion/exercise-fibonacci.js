// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){
  //code here;
  let previousOne, previousTwo = 0;
  
  for(let i = 0; i <= n; i++){
    if(i === 1) previousOne = 1;
    
    // If the count it's greater than one, then i start saving the 2 previous values
    if(i > 1){
      // save on an aux variable the actual previous one
      let previousAux = previousOne;
      // the new previous one it's going to be the sum of the 2 previous values
      previousOne = previousOne + previousTwo;
      // the new previous two it's the old previous one
      previousTwo = previousAux;
    }
  }
  
  return previousOne;
}
console.log(fibonacciIterative(6));

let count = 0;
let previousOne, previousTwo = 0;

function fibonacciRecursive(n) {
  //code here;
  // If the count it's equal to one, then i start saving the first previous
  if(count === 1) previousOne = 1;

  // If the count it's greater than one, then i start saving the 2 previous values
  if(count > 1){
    // save on an aux variable the actual previous one
    let previousAux = previousOne;
    // the new previous one it's going to be the sum of the 2 previous values
    previousOne = previousOne + previousTwo;
    // the new previous two it's the old previous one
    previousTwo = previousAux;
  }

  // if count equal to n, then i return the sum of the two previous values
  if(count === n) return previousOne;
  
  // increase the count
  count++;
  
  return fibonacciRecursive(n);
}

// Method of the course, that's it have more or less cost in memory
function correctFibonacciRecursive(n){
  if(n<2)
    return n;

  return correctFibonacciRecursive(n-1) + correctFibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(10));
console.log(correctFibonacciRecursive(13));