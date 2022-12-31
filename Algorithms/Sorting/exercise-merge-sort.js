const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const left = array.slice(0,Math.ceil(array.length/2));
  const right = array.slice(Math.ceil(array.length/2),array.length);
  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  // Variable that contains the merged array
  const mergedArray = [];
  // Variable that contains the next position to get of the left array
  let cLeft = 0;
  // Variable that contains the next position to get of the right array
  let cRight = 0;
  
  do{
    // if we already getted the values from the right array
    if(cRight >= right.length){
      // then i start getting the values from the left array
      mergedArray.push(left[cLeft]);
      cLeft++;
      continue;
    }
    // if we already getted the values from the left array
    if(cLeft >= left.length){
      // then i start getting the values from the right array
      mergedArray.push(right[cRight]);
      cRight++;
      continue;
    }

    // if the actual left it's less than the actual right
    if(left[cLeft]<=right[cRight]){
      // then i get the next left value
      mergedArray.push(left[cLeft]);
      cLeft++;
    }
    else{ // else, i get the next right value
      mergedArray.push(right[cRight]);
      cRight++;
    }
  } while(cLeft < left.length || cRight < right.length)
  
  return mergedArray;
}


const answer = mergeSort(numbers);
console.log(answer);