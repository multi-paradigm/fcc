function convertHTML(str) {
  let chars = ['&', '<', '>', '"', "'"]
  let entities = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;']
  var arr = str.split("")
  arr.forEach(function (value) {
    // If arr/str contains any element found at chars and/or entities
    if (chars.indexOf(value) >= 0) {
      let index_arr = arr.indexOf(value)
      let index_chars = chars.indexOf(value)
      arr[index_arr] = entities[index_chars]
    }
  })
  console.log(arr.join(""))
  return arr.join("");
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")