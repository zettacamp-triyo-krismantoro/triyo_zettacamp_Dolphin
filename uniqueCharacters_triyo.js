/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  // Your logic here
  let strArray = [];
  for (i in str) {
    if (strArray.includes(str[i])) {
      return false;
    } else {
      strArray.push(str[i]);
    }
  }
  return true;
}

console.log(hasUniqueCharacters("abcdefg"));
console.log(hasUniqueCharacters("hello"));
console.log(hasUniqueCharacters("nababan"));