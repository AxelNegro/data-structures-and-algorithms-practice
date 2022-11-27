// Create a function that merge arrays and sort the result array
function mergeSortedArrays(arr1, arr2) {
  // check input
  if ((!arr1||arr1.length == 0)&&(!arr2||arr2.length == 0)) return "Check input";

  if(!arr1||arr1.length == 0) return arr2;
  else if (!arr2||arr2.length == 0) return arr1;

  // First, i get the first two items of the array
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  // Later, i initialize two count variables and a array for the merge
  let i = 1;
  let j = 1; 
  let mergedArray = [];

  // I create a while that's going to be true if one of the two items it's not undefined
  while(arr1Item||arr2Item){ 
    // If the second array item its greater or it's undefined,
    // then i save the next item of the first array
    if(!arr2Item||arr1Item<arr2Item){
      // save the item on the merged array
      mergedArray.push(arr1Item); 
      // get the next item
      arr1Item = arr1[i];
      // raise the count
      i++; 
    }
    else{ // if not, then i save the nex item of the second array
      // save the item on the merged array
      mergedArray.push(arr2Item);
      // get the next item
      arr2Item = arr2[j];
      // raise the count
      j++;
    }
  }
  
  return mergedArray;
}

console.log(mergeSortedArrays([1,3,4], [1,3,4]));