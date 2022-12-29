//Implement a function that reverses a string using iteration...and then recursion!

// Recursive method
function reverseString(str) {
  // base case, if string it's length 1, then i return
  if(str.length == 1) return str[0];
  // recursive case, if string it's has a length greater than 1
  // then i return the concatenation of the last character of the string +
  // call the function and send the string with the final character out
  if(str.length > 1) return str[str.length-1] + reverseString(str.substring(0,str.length-1))
}

// Iterative method
function reverseStringIterative(str){
  // instantiate the reverse string
  let rvrStr = [];

  // make a for loop to loop the string from the final character
  for(let i = str.length-1; i >= 0; i--){
    // in every iteration, i save the character in the reverse string variable
    rvrStr += str[i];
  }

  return rvrStr;
}

console.log(reverseString('yoyo mastery'))
console.log(reverseStringIterative('yoyo mastery'))

//should return: 'yretsam oyoy'