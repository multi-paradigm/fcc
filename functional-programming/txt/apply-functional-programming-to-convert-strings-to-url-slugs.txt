
function urlSlug(title) {
  return title.split(" ").filter(
    (string) => string.length > 0
  ).join("-").toLowerCase()
}



urlSlug("Winter Is Coming")
urlSlug(" Winter Is  Coming")
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")