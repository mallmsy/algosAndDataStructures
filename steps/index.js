// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'



function steps(n) {
  let printString =['#', ' ']
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = )
  }
}



// function steps(n) {
//   let printString =['#', ' ']
//   for (let i = 1; i <= n; i++) {
//     if (i < n) {
//       console.log(printString.join(''))
//       printString.unshift('#')
//     } else {
//       printString.unshift('#')
//       console.log(printString.pop())
//     }
//   }
// }
module.exports = steps;
