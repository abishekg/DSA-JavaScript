// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var words = "";
    for (var i = 0; i < str.length; i++) {
        if ((i === 0) || (str[i - 1] === " " && i < str.length - 1)) {
            words = words + str[i].toUpperCase();
        } else {
            words = words + str[i];
        }
    }
    return words;
}

module.exports = capitalize;

//Solution 1
// function capitalize(str) {
//     var words = [];
//     var strArr = str.split(" ");
//     strArr.forEach(element => {
//         words.push(element[0].toUpperCase() + element.slice(1));
//     });
//     return words.join(" ");
// }