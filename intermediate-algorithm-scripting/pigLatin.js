// I don't like this solution

function translatePigLatin(str) {
  let newString = ""
  let vowels = /(^[aeiou]+)/i
  let consonants = /(^[^aeiou]+)([a-z]*)/ig
  
  if (str.match(vowels)) {
    newString = str + 'way'
  }
  if (str.match(consonants)) {
    let match = str.match(consonants)
    newString = str.replace(consonants, '$2$1ay')
  }
  console.log(newString)
  return newString
}

translatePigLatin("california") // aliforniacay
translatePigLatin("paragraphs") // aragraphspay
translatePigLatin("glove") // oveglay
translatePigLatin("algorithm") // algorithmway
translatePigLatin("eight") // eightway
translatePigLatin("schwartz") // artzschway
translatePigLatin("rhythm") // rhythmay