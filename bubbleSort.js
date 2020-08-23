'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.getSuperLongStaticArray();

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//remove the second arguments if you want to sort the array in ascending order
bubbleSort(arr, true);

//This algorithm works by 'bubbling' up the largest number to the back position of an array.
//To make this algorithm faster we can decrease the length of the array that we want to search
//for every number that has been bubbling up in the array.
//remove the comments for the console.log to see how the sorting work behind the scene
function bubbleSort (arr, descending=false) {
    //iterate through the values
    for (let position = 0; position < arr.length; position++) {
        //iterate over the array to see we can swap values 
        for (let element = 0 ; element < arr.length - position - 1; element++) {
            const currItem = arr[element];
            const nextItem = arr[element + 1];
            //if the current element has lower or higher value (base on the sorting order) than the next item
            //swap the values
            if ((currItem > nextItem && descending == false) || (currItem < nextItem && descending == true)) {
                //console.log(`Sorting for position: ${arr.length - position},\nSwapping element: ${element + 1} and ${element + 2},\nInitial array: ${arr}\n`);
                arr[element] += nextItem;
                arr[element + 1] = arr[element] - nextItem;
                arr[element] = arr[element] - arr[element + 1];
                //console.log(`Modified array: ${arr}\n`);
            }
        }
    }
    console.log(`\nSorted Array: ${arr}\n`);
    console.timeEnd("Process Time");
}