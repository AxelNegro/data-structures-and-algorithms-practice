const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  // for to iterate over all elements
  for(let i = 1; i < array.length; i++){
    // instantiate the variable that gona contain the current place of the element that's moving
    let currentPlace = i;
    // while that iterates while the current place minus 1 its greater or equal than 0
    while(currentPlace - 1 >= 0){
      // if the element on the current place its minor than the element on current place minus one
      if(array[currentPlace] < array[currentPlace-1]){
        // then i change positions
        let aux = array[currentPlace-1];
        array[currentPlace-1] = array[currentPlace];
        array[currentPlace] = aux;
        // and update the current place
        currentPlace = currentPlace-1;
      }
      else // else, i go out of the while
        break;
    }
  }
}

insertionSort(numbers);
console.log(numbers);