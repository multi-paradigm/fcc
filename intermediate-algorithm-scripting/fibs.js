/* 
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. 
*/



function sumFibs(num) {
  var fibs = [0, 1]
  var n = 0
  while (n <= num) {
    let x = fibs[fibs.length - 2]
    let y = fibs[fibs.length - 1]
    n = x + y
    fibs.push(n)
  }
  //console.log(fibs)
  var odds = []
  fibs.forEach(function(value){
    if (value % 2 === 1 && value <= num) {
      odds.push(value)
    }
  })
  //console.log(odds)
  return odds.reduce( (a, b)=> a + b)
}


sumFibs(1); // 2
sumFibs(100); // 1785
sumFibs(4000000); // 4613732
sumFibs(4); // 5
sumFibs(75024); // 60696
sumFibs(75025); // 135721
