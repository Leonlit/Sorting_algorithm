'use strict'

//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.getStaticArray(); //utility.generateArray(20);
console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//This algorithm works by 'bubbling' up the largest number to the back position of an array.
//To make this algorithm faster we can decrease the length of the array that we want to search
//for every number that has been bubbling up in the array.
for (let position = 0; position < arr.length; position++) {
    for (let element = 0 ; element < arr.length - position - 1; element++) {
        if (arr[element] > arr[element + 1]) {
            console.log(`Sorting for position: ${arr.length - position},` +
                         `\nSwapping element: ${element + 1} and ${element + 2},\nInitial array: ${arr}\n`);
            arr[element] += arr[element + 1];
            arr[element + 1] = arr[element] - arr[element + 1];
            arr[element] = arr[element] - arr[element + 1];
            console.log(`Modified array: ${arr}\n`);
        }
    }
}

console.log(`\nSorted Array: ${arr}\n`);
console.timeEnd("Process Time");