// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // g = global;  don't stop at the first case
  // i = insensitive; case insensitive
  const matches = str.match(/[aeiou]/gi)
  // if .match returns an array of all matches BUT if no match is found it returns null
  return matches ? matches.length : 0;
}


// function vowels(str) {
//   let count = 0;
//   const vow = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (vow.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

module.exports = vowels;
