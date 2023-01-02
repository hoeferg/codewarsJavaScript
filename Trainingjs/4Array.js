// function getLength(arr) {
//     return arr.length
// }
// function getFirst(arr) {
//     return arr[0]
// }
// function getLast(arr) {
//     const arrayLast = arr[arr.length - 1];
//     return arrayLast
// }
// function pushElement(arr) {
//     var el = 1;
//     // arr.push(1);
//     arr.push(el);
//     return arr
// }

// function popElement(arr) {
//     arr.pop(1);
//     return arr
// }

const getLength = array => array.length;
const getFirst =  array => array[0];
const getLast = array => array[array.length -1];
const pushElement = array => array.concat(0);
const popElement = array => array.splice(0, array.length -1);