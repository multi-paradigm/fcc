
/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/



function addTogether() {
  
  if (arguments.length == 2) {
    let x = typeof arguments[0] === 'number' ? arguments[0] : undefined
    let y = typeof arguments[1] === 'number' ? arguments[1] : undefined

    if (x && y !== undefined) {
      return x + y
    }
    return undefined

  } else {

    if (arguments.length === 1) {
      let x = typeof arguments[0] === 'number' ? arguments[0] : undefined
      if (x !== undefined) {
        function getY(y) {
          if (typeof y === 'number') {
            return x + y
          } 
          return undefined
        }
        return getY
      }
      return undefined

    } else {
      return undefined
    }
  }
}

addTogether(2, 3)
addTogether(23, 30)
addTogether("http://bit.ly/IqT6zt")
addTogether(2, "3")
addTogether(5)(7)
addTogether(2)([3])
