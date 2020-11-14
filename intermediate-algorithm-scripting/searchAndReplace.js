
function myReplace(str, before, after) {
  let find = new RegExp(`(${before})`, 'i')
  let match = str.match(find)
  if (before[0] === before[0].toUpperCase()) {
    // A capital case was detected
    let upperCase = after.slice(0, 1).toUpperCase() + after.slice(1, after.length)
    return str.replace(find, upperCase)
  } 
  // We only change the case of "after" when "before" is a lowercase string
  return str.replace(find, after.toLowerCase())
}

myReplace(
  "Let us go to the store",
  "store",
  "mall",
)
myReplace(
  "He is Sleeping on the couch",
  "Sleeping",
  "sitting"
)
myReplace(
  "I think we should look up there",
  "up",
  "Down"
) 
myReplace(
  "This has a spellngi error",
  "spellngi",
  "spelling"
)
myReplace(
  "A quick brown fox jumped over the lazy dog",
  "jumped",
  "leaped"
)
myReplace(
  "His name is Tom",
  "Tom",
  "john"
)
myReplace(
  "Let us get back to more Coding",
  "Coding",
  "algorithms"
)