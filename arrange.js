
const before = ['❤ A', '❤ 9', '❤ 3', '❤ 6', '♣ A']


function arrange(arr, from, to) {
  let tempFrom = from
  let tempTo = arr.length - -(to)
  console.log(tempFrom, tempTo)
  let newArr = [
    ...arr.slice(0, from),
    arr[tempTo],
    ...arr.slice(from, tempTo),
    arr[tempFrom]
    
  ]
  console.log(newArr)
}

const magics = arrange(before, 1, -2)