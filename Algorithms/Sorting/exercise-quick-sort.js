const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array){
  // first,  i create two variables, one to save the pivot position
  let pivotP = array.length-1;
  // and another to save the next position to compare
  let nextP = 0;

  // while to sort the elements using the pivot
  while(nextP != pivotP){
    // if the selected element it's greater than the pivot
    if(array[nextP] >= array[pivotP]){
      // then it's moved next to the pivot
      array.push(array[nextP]);
      array.splice(nextP, 1);
      // and the position of the pivot it's one less
      pivotP--;
    }
    else
      // if not, the order its the same and i get the next number
      nextP++;
  }

  // base case, if the array its of two elements or it's three elements and the pivot it's in the middle
  if(array.length <= 2 || (array.length === 3 && pivotP === 1))
    // then i return it
    return array;

  // if not, then there's the recursive case
  // if the pivot it's not the start nor the end
  if(pivotP != 0 && pivotP != array.length-1)
    // then i return the call of the method + pivot + call of the method
    return quickSort(array.slice(0,pivotP)).concat(array[pivotP], quickSort(array.slice(pivotP+1)))
  else if(pivotP != 0) // if the pivot it's the end
    // then i return the call of the method + the pivot
    return quickSort(array.slice(0,pivotP)).concat(array[pivotP]);
  else // else, the pivot its the start
    // so i return pivot + call of the method
    return [].concat(array[pivotP], quickSort(array.slice(pivotP+1,array.length)));
}


//Select first and last index as 2nd and 3rd parameters
console.log(quickSort(numbers));