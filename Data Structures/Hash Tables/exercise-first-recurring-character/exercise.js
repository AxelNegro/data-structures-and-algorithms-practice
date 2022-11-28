function firstRecurringCharacter(input) {
  // check input
  if(!input||input.length < 1) return undefined
  // Instantiate a set that's going to contain all seen numbers
  const set = new Set()
  // iterate through array 
  for(i = 0; i < input.length; i++){
    // if the set has seen the current number, the function return the number that has been seen
    if(set.has(input[i])) return input[i];
      // if not, it's added to the seen numbers
    else set.add(input[i]);
  }
  // if the for has finished, then there's no repeated number, so return undefined
  return undefined;
}


//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));

//Given an array = [2,3,4,5]:
//It should return undefined
console.log(firstRecurringCharacter([2,3,4,5]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));

// Check if input undefined
console.log(firstRecurringCharacter(undefined));