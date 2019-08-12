// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function sanitize(string) {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  // return string.replace(/[^\w]/g, '').toLowerCase().split('')

}

// function createHash(array) {
//   let final = {};
//
//   for (let el of array) {
//     final[el] = final[el] + 1 || 1
//   }
//   return final;
// }

function anagrams(stringA, stringB) {

  return sanitize(stringA) === sanitize(stringB)
  // let arrayA = sanitize(stringA)
  // let arrayB = sanitize(stringB)
  // let hashA = createHash(arrayA)
  // let hashB = createHash(arrayB)
  //
  // if (arrayA.length !== arrayB.length) {
  //   return false
  // }
  //
  // for (let key in hashA) {
  //   if (hashA[key] !== hashB[key]) {
  //     return false
  //   }
  // }
  // return true
}

// santize each string using regex and toLowerCase
// check lengths
// if same length, then create hashmap for each, and compare each key

module.exports = anagrams;
