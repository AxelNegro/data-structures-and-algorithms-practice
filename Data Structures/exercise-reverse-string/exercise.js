// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'
function reverse(str){
  // check input
  if(!str || typeof str !== 'string') return "Invalid input";
  // instanciate reverse string
  let rStr = "";
  // iterate string from the last character
  for(var i = str.length-1; i >= 0; i--){
    // add the character to the reverse string variable
    rStr += str[i];
  }
  //return variable
  return rStr;
}