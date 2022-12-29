const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // if the array it's length 1 or it's sorted, then i return it
  if(array.length <= 1 || checkSort(array)) return array;

  // for to iterate over the array except the last element
  for(let i = 0; i < array.length-1; i++){
    // if the actual element its greater than the next element
    if(array[i] > array[i+1])
    {
      // then i change their positions
      let auxN = array[i+1];
      array[i+1] = array[i];
      array[i] = auxN;
    }
  }

  // and call the function again
  return bubbleSort(array);
}

// Method to check if the array it's sorted or not
function checkSort(array){
  //instantiate a variable to save the prev value
  let prev = null;
  // for to iterate over the array
  for(let i = 0; i < array.length; i++){
    // if prev it's null, then i assign the actual element
    if(prev === null) prev = array[i];
    else{// if not, then i begin the check 
      // if the actual element it's greater or equal than the actual element
      if(prev <= array[i])
        prev = array[i]; // then it's ok, so i save the actual element and continue iterating
      else return false; // if not, return false, the array it's not sorted
    }
  }
  return true; // if the code reaches this part, then it's sorted
}

bubbleSort(numbers);
console.log(numbers);