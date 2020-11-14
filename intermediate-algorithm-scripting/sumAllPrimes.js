/* 

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. 

*/


function sumPrimes(n) {
  var primeNumbers = []
  let isPrime = 2
  while (isPrime <= n) {
    var divisors = []
    let range = [
      ...Array.from(
        { length: isPrime },
        (k, v)=> v + 1
      )
    ]
    for (let index = 0; index < range.length; index++){
      let divisor = range[index]
      if (isPrime % divisor === 0) {
        divisors.push(divisor)
      }
    }
    
    if (divisors.length === 2) {
      divisors.forEach(
        function (n) {
          if (primeNumbers.indexOf(n) < 0 && n !== 1) {
            primeNumbers.push(n)
          }
        }
      )
    }
    isPrime++
  }
  console.log(primeNumbers.reduce( (a, b)=> a + b))
  return primeNumbers.reduce( (a, b)=> a + b)
}

sumPrimes(10);   // 17
sumPrimes(977); // 73156