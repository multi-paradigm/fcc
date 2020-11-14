
function splitArr(arr) {
  let newArr = []
  for (let c = 0; c < arr.length; c++){  
    newArr.push( ...arr[c])
  }
  return newArr
}

function whatIsInAName(collection, source) {
  var arr = []
  let sEntries = splitArr(Object.entries(source)) // source entries
  for (let i = 0; i < collection.length; i++){
    let cEntries = splitArr(Object.entries(collection[i])) // collection entries
    let flag = 0;
    let index = 0
    while (index < sEntries.length) {
      if (cEntries.includes(sEntries[index])) {
        // We inclement the flag variable each time we get a positive evaluation
        flag++
      }
      index++
    }
    if (flag === sEntries.length) {
      // flag is equal to the number of times that a given elem/property (see source) was found
      arr.push(collection[i]) 
    }
  }
  console.log(arr)
  return arr
}


whatIsInAName(
  [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" } // Search for this
); // [{ first: "Tybalt", last: "Capulet" }]

whatIsInAName(
  [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }],
  { "apple": 1 } // Search for this
); // [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

whatIsInAName(
  [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
  { "apple": 1, "bat": 2 } // Search for this
); // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

whatIsInAName(
  [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }],
  { "apple": 1, "cookie": 2 }
); // [{ "apple": 1, "bat": 2, "cookie": 2 }]

whatIsInAName(
  [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }],
  { "apple": 1, "bat": 2 }
); // { "apple": 1, "bat": 2, "cookie":2 }]

whatIsInAName(
  [{ "a": 1, "b": 2, "c": 3 }],
  {"a": 1, "b": 9999, "c": 3}
); // []