// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// Ideal solution
function reverseInt(n) {
  let reversedInt = n.toString().split('').reverse().join('')
  return parseInt(reversedInt) * Math.sign(n);
}

/* Less ideal solution:
function reverseInt(n) {
  let reversedInt = parseInt(n.toString().split('').reverse().join(''))
  if (Math.sign(n) === -1) {
    return reversedInt * -1
  } else {
    return reversedInt
  }
}
*/

module.exports = reverseInt;
