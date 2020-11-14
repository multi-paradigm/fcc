

function isArray(obj, arr) {
  
  function findNonArray() {
    for (let index = 0; index < obj.length; index++){
      var elem = obj[index];
      if (Array.isArray(elem)) {        
        isArray(elem, arr)
      } else {
        arr.push(elem)
      }
    } 
  } 

  if (Array.isArray(obj)) {
    findNonArray()
  } else {
    arr.push(obj)
  }
}

function steamrollArray(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++){
    isArray(arr[index], newArr);
  }
  console.log(newArr);
  return newArr;
}

steamrollArray(
  [[["a"]], [["b"]]]
); // ["a", "b"]

steamrollArray(
  [1, [2], [3, [[4]]]] 
); // [1, 2, 3, 4]

steamrollArray(
  [1, [], [3, [[4]]]]
); // [1, 3, 4]

steamrollArray(
  [1, {}, [3, [[4]]]]
); // [1, {}, 3, 4]