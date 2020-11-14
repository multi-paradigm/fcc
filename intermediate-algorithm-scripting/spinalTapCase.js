/*
  The following return statement would work just fine for any given string where a WORD is just a character (or a sequence of it) followed by a space ('\s').

  return str.split(" ").join("-").toLowerCase()

  The above statement would be enough to pass a test case where the input is "This Is Spinal Tap" or "I like dogs"

  But, in our case, a WORD is a bit more complicated
  Consider the following strings: 

    1. "This Is Spinal Tap"
    2. "thisIsSpinalTap"
    3. "thisIsSpinalTap"
    4. "TheAndyGriffith_Show"
    5. "Teletubbies say Eh-oh"
    6. "AllThe-small Things"

  Evidently, we can tell what is a word in the first given string. Simply put, it is just a matter of space.
  But we cannot just apply that rule in order to get a splitted array, since that a regex of that kind would result in a array containing spaces only, and we want to get to the string itself representing a word.
  Let's move on for now.
  We can visually split the second string into "this Is Spinal Tap", right?
  To determine whether a character or sequence of it is a WORD, in this particular case, we did:
    Any group of lowercase characters is a word (As in this)
    Any capital character followed (or not) by lowercase characters is a word (As in Is, Spinal, Tap, I)
  So far, we applied two rules for the second type of input. Translating those rules to regex we get:
  [a-z]+  // Matchs any sequencce of lowercase characters from a-z
  [A-Z][a-z]+ // Matchs "Hello" but not "HI"
  [A-Z] // Matchs any uppercase characterfrom a-z
*/

function spinalCase(str) {
  /*
    A word is any sequence of characters that starts with a capital letter followed by lowercase characters
    Or any sequence of lowercase characters such as abc
    Or any upper character such as I, A, B, C, but not AB

  */
  let regex = /([A-Z][a-z]+|[a-z]+|[A-Z])/g
  let word = str.match(regex)
  let newString = ""
  word.forEach((w) => newString += word.indexOf(w) != word.length - 1 ? w + '-' : w)
  console.log(str, word, newString.toLowerCase()) 
  return newString.toLowerCase()
}

 // "i-like-dogs"
spinalCase('This Is Spinal Tap'); //"this-is-spinal-tap"
spinalCase("thisIsSpinalTap") // "this-is-spinal-tap"
spinalCase("TheAndyGriffith_Show") // "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh") // "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things") // "all-the-small-things"
spinalCase("I like dogs")

// ([\s]|[\w]|[A-Z_][a-z_]+|[a-z_])