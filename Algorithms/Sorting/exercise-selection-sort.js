const numbers = [99, 44, 63,6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  // variable that contains the minimum value
  let minum = null;
  // variable that contains the place of the minimum value
  let minumPlace = null;
  // for to iterate over all the elements
  for(let i = 0; i<array.length; i++){
    // for to iterate over every element starting from i
    for(let j = i; j<array.length; j++){
      // if the minum variable it's null, then i assign the actual element to it
      if(minum === null) minum = array[j];
        // else if the minum value its greater than the actual element
      else if(minum > array[j]){
        // then we have a new minimum value
        minum = array[j];
        minumPlace = j;
      }
    }
    // once finished the inner for, then i change the positions of the minimum value with the actual element of the first for
    let aux = array[i];
    array[i] = array[minumPlace];
    array[minumPlace] = aux;
    // and reset the minimum value
    minum = null;
  }

  return array;
}

console.log(selectionSort(numbers));