/*
  Since arr is an expected argument and it's always available (in our case), I deleted it from the arguments object
  That way, I can freely use the remaining object to create a new set
*/

function destroyer(arr) {
  delete arguments[0]
  var args = new Set(Object.values(arguments))
  var newArr = []
  for (let i = 0; i < arr.length; i++){
    if (args.has(arr[i]) === false) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
  return newArr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // [1]
destroyer([2, 3, 2, 3], 2, 3) // []
destroyer(["tree", "hamburger", 53], 'tree', 53) // ["hamburger"]
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") // [12,92,65]
