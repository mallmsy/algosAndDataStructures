// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* STEPS:
1. split out the characters of the string
2. reverse those characters
3. check if that reversed string === the original string
*/

//Not ideal solution, but shows knowledge of an advanced array helper:

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })
}


/* Ideal solution:

function palindrome(str) {
  let reversed = str.split('').reverse().join('')
  return reversed === str
}
*/

/* Good solution, but can be refactored:

function palindrome(str) {
  let reversed = str.split('').reverse().join('')
  if (reversed === str) {
    return true
  } else {
    return false
  }
}
*/

module.exports = palindrome;
