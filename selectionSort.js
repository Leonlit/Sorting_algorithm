'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.getLongStaticArray();

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//remove the second arguments if you want to sort the array in ascending order
selectionSwap(arr, true);

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

function selectionSwap (arr, descending = false) {
    for (let position = 0; position < arr.length - 1; position++) {
        let currSwap = arr[position];
        let currSwapIndex = position;
        for (let element = position + 1; element< arr.length; element++) {
            if ((currSwap > arr[element] && !descending) || (descending && currSwap < arr[element])) {
                currSwap = arr[element];
                currSwapIndex = element;
            }
        }
        if (currSwapIndex == position) continue
        console.log(`Sorting for position: ${arr.length - position},\nSwapping element: ${position + 1} and ${currSwapIndex + 1},\nInitial array: ${arr}\n`);
        arr[position] += arr[currSwapIndex];
        arr[currSwapIndex] = arr[position] - arr[currSwapIndex];
        arr[position] = arr[position] - arr[currSwapIndex];
        console.log(`Modified array: ${arr}\n`);
    }
    console.log(`\nSorted Array: ${arr}\n`);
    console.timeEnd("Process Time");
}