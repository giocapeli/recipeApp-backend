function checkPlural(word) {
  const finalEs = ["s", "h", "x", "z"];
  if (word[word.length - 1] === "s") {
    if (word[word.length - 2] === "e") {
      if (word[word.length - 3] === "i") {
        return word.substring(0, word.length - 3) + "y";
      } else if (finalEs.includes(word[word.length - 3])) {
        return word.substring(0, word.length - 2);
      }
      return word.substring(0, word.length - 2);
    }
    return word.substring(0, word.length - 1);
  }
  return word;
}
function splitAndTrim(array) {
  const newArray = array.split(",").map((e) => e.trim());
  return newArray;
}
