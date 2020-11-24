var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort()
}
nonMutatingSort(globalArray);
var x = nonMutatingSort(globalArray)
console.log(globalArray, x)