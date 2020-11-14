/*

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

function binaryAgent(str) {
  let binaryStr = str.split(" ")
  
  let base10 = [];
  for (let index = 0; index < binaryStr.length; index++){
    // Matchs power with the first binary number
    let base2 = binaryStr[index].split("").reverse()
    let chunk = []
    let power = 0
    while (power < base2.length) {
      let bit = base2[power]
      let pow = Math.pow(2, power)
      chunk.push(bit * pow)
      power++
    }
    base10.push(chunk.reduce((a, b) => a + b))
  }

  let base10toString = []
  for (let c = 0; c < base10.length; c++){
    base10toString.push(String.fromCharCode(base10[c]))
  } 
  //console.log(base10toString.join(""))
  return base10toString.join("")
}


//binaryAgent("1011") // 11
//binaryAgent("1001") //  9

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
// "Aren't bonfires fun!?"

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
// "I love FreeCodeCamp!"

