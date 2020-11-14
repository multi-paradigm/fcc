/*
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.

*/
function alphabetRange(str) {
  if (str.length === 0) {
    // Including A-Z
    let from = alphabet[0]
    let to = alphabet[alphabet.length]
  } else {
    if (str.length === 1) {
      let from = alphabet[0]
      let to = alphabet[alphabet.length]
    }
  }
}

function fearNotLetter(str) {
  
  let alphabet = "abcdefghijklmnopqrstuvwxyz ".split("")
  let x = str.length <= 1 ? alphabet[0] : alphabet[1] 
  let y = str.length <= 1 ? alphabet[alphabet.length - 1] : alphabet[alphabet.length]
  let range = alphabet.slice(alphabet.indexOf(x), alphabet.indexOf(y))
  let missingLetter = ""
  console.log(str, range)
  for (let i = 0; i < str.length; i++){  
    if (range.indexOf(str[i]) >= 0) {
      let present = range.indexOf(str[i])
      range.splice(present, 1)
    }
  } 
  
  
  if (range.length === 0) {
    // All letters are present
    return undefined
  } else {
    // What if more than one letter is missing?
    range.forEach((letter) => missingLetter += letter)
    console.log(missingLetter)
    return missingLetter
  }

}


  
// Testing block
fearNotLetter(
  ""
) // a-z
fearNotLetter(
  "a"
) // b, c, d, e...z
fearNotLetter(
  "z"
) // a, b, c...z
fearNotLetter(
  "az"
) // b, c, d, e...z
fearNotLetter(
  "za"
) // Reversed range: z,y,x,w...a
fearNotLetter(
  "abce"
) // d
fearNotLetter(
  "abcdefghjklmno" 
) // i
fearNotLetter(
  "stvwx"
) // u
fearNotLetter(
  "bcdf"
) // e
fearNotLetter(
  "abcdefghijklmnopqrstuvwxyz" 
) // undefined