// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// #1
// function reverse(s) {
//   return s.split("").reverse().join("");
// }

// #2
function reverse(s) {
  let str = "";
  for (let c of s) {
    str = c + str;
  }
  return str;
}

// #3
// function reverse(s) {
//   return s.split("").reduce((r, c) => c + r, "");
// }

module.exports = reverse;
