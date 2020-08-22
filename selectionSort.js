//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.getStaticArray();//utility.generateArray(20);
console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//selection sort works by selecting the smallest number in an array and assign it to the left hand side of the array.
//I implemented this algorithm by first search the minimum number for the current array (in the boundary)
//then when I reached the end of the loop for finding Min number, I then move the value of the Min number to the left most
//of the current array boundary. For example, lets say the first two value of an array have already been sorted previously
//
// array boundary:
//      position = 3
//
//      will only search here for Min number
//            |          |
//      [1, 3, 5, 6, 8, 4] 
//          ^
//      array boundary
//
//since the other two number has already been sorted, we can ignore thoes two index, therefore safe some time.

for (let position = 0; position < arr.length - 1; position++) {
    let currMin = arr[position];
    let currMinIndex = position;
    for (let element = position + 1; element< arr.length; element++) {
        if (currMin > arr[element]) {
            currMin = arr[element];
            currMinIndex = element;
        }
    }
    if (currMinIndex == position) continue
    console.log(`Sorting for position: ${arr.length - position},` +
                         `\nSwapping element: ${position + 1} and ${currMinIndex + 1},\nInitial array: ${arr}\n`);
    arr[position] += arr[currMinIndex];
    arr[currMinIndex] = arr[position] - arr[currMinIndex];
    arr[position] = arr[position] - arr[currMinIndex];
    console.log(`Modified array: ${arr}\n`);
}

console.log(`\nSorted Array: ${arr}\n`);
console.timeEnd("Process Time");