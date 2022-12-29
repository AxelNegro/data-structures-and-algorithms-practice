// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// Function that use the recursive method to find factorial
function findFactorialRecursive(number) {
  // base case, if it's 1, then i start to go back
  if(number === 1)
    return number;
  // recursive case, i get the factorial of the actual number multiplying for the factorial of the number - 1
  return number * findFactorialRecursive(number-1);
}

// Function that use the iterative method to find factorial
function findFactorialIterative(number) {
  // instantiate a variable with 1
  let answer = 1;
  // create the for to iterate until i > number
  for(i = 1; i <= number; i++)
    // i multiply the actual answer per the actual number
    answer = answer * i;
  return answer;
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))