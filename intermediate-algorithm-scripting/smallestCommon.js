




function rangeArr(start, end) {
  var newArr = []
  while (start <= end) {
    newArr.push(start)
    start++
  }
  return newArr;
}

function smallestCommons(arr) {
  // TODO: Support for more parameters 
  const x = arr[0] < arr[1] ? arr[0] : arr[1] // min
  const y = arr[1] > arr[0] ? arr[1] : arr[0] // max
  var range = rangeArr(x, y)
  //Find the multiples of x, y
  var multiplesOfX = []
  var multiplesOfY = []
  var smallestCommonsList = []
  var smallestCommonMultiple = null
  let naturalNumber = 1
  while (smallestCommonMultiple === null) {
    let newX = x * naturalNumber
    let newY = y * naturalNumber
    console.log(smallestCommonMultiple, `${x},${y} vs ${naturalNumber}`, newX, newY)
    smallestCommonsList.push(newY)
    // Find the smallest common (needs optimization)
    
    for (let n = 0; n < smallestCommonsList.length; n++){
      var index = 0
      while (index < range.length) {
        if (smallestCommonsList[n] % range[index] === 0) {
          if (range[index] === y) {
            smallestCommonMultiple = smallestCommonsList[n]
            console.log(`The SCM for ${x}, ${y} is `, smallestCommonMultiple, ' / ', range)
            n = smallestCommonsList.length
          } 
        } else {
          index = range.length // exit
        }
        index++
      }
    }
    

    //
    naturalNumber++
  }
  
  return smallestCommonMultiple
}

smallestCommons([1, 3]);   // 6 
