// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	debugger;
	return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

//Solution 1
// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// Solution 2
// function reverse(str) {
// 	var reversed = '';
// 	for(var character of str) {
// 		reversed = character + reversed;
// 	}
// 	return reversed;
// }
