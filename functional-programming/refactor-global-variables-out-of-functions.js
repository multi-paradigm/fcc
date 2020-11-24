// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  let newArr = arr.slice();
  newArr.push(bookName);
  return newArr;
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  var book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    let arrB = arr.slice(0, book_index)
    let arrA = arr.slice(book_index + 1)
    let newArr = arrB.concat(arrA)
    return newArr
    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');


console.log(newBookList);
console.log(newerBookList)
