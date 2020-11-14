
function pairElement(str) {
  let arr = []
  for (let index = 0; index < str.length; index++) {
    let char = str[index]
    switch (char) {
      case "A":
        arr.push(["A", "T"])
        break
      case "T":
        arr.push(["T", "A"])
        break
      case "C":
        arr.push(["C", "G"])
        break
      case "G":
        arr.push(["G", "C"])
    }  
  }
  console.log(arr)
  return arr
}

pairElement("GCG");  // [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA") // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]