/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/
function rangeArr(start, end) {
  var newArr = []
  while (start <= end) {
    newArr.push(start)
    start++
  }
  return newArr;
}

function smallestCommons(arr) {
  const x = arr[0] < arr[1] ? arr[0] : arr[1]; // min
  const y = arr[1] > arr[0] ? arr[1] : arr[0]; // max
  const range = rangeArr(x, y);
  let naturalNumber = 1;
  var smallestCommonMultiple = null;
  while (smallestCommonMultiple === null) {
    let number = y * naturalNumber;
    for (let index = 0; i < range.length; index++){
      if (number % range[index] === 0) {
        if (range[index] === y) {
          smallestCommonMultiple = number;
        } 
      } else {
        // Leads back to while loop
        index = range.length;
      }
    }
    naturalNumber++;
  }
  console.log(smallestCommonMultiple);
  return smallestCommonMultiple;
}

smallestCommons([1, 3]);    // 6
smallestCommons([1, 5]);   // 60
smallestCommons([2, 10]);  // 2520
smallestCommons([1, 13]);  // 360360
smallestCommons([23, 18]); // 6056820