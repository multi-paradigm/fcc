/*

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

*/


function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++){
    // Find property 
    if (collection[i].hasOwnProperty(pre)) {
      // We use Boolean as a function ant not as an object (new Boolean(value))
      // Strict equality (===) comparison won't work if eval is an object 
      let evaluation =  Boolean(collection[i][pre])
      if (evaluation === false) {
        return false
      }
    } else {
      // Property not found
      return false
    }
  }
  return true
}


