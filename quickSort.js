'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.getSuperLongStaticArray();

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//remove the second arguments if you want to sort the array in ascending order
let sortedArray = quickSort(arr, true);

//remove the comments for the console.log to see how the sorting work behind the scene
function quickSort (arr, descending = false,) {
    if (arr.length <= 1) return arr;
    if (arr.length == 2) {
        if (descending) {
            let tempArr = [Math.max(...arr), Math.min(...arr)];
            //console.log(`returning ${tempArr}`);
            return tempArr;
        }else {
            let tempArr = [Math.min(...arr), Math.max(...arr)];
            //console.log(`returning ${tempArr}`);
            return tempArr;
        }
    }
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    for (let index = 0 ; index < arr.length - 1; index++){
        let currItem = arr[index];
        if (currItem >= pivot){
            if (descending) {
                left.push(currItem)
            }else {
                right.push(currItem);
            }
        }else {
            if (descending) {
                right.push(currItem);
            }else {
                left.push(currItem);
            }
        }
    }
    //console.log(`Sorting pivot: ${pivot}, left: ${left}, right: ${right}\n`);
    return [...quickSort(right), pivot, ...quickSort(left)];
}
console.log(`Sorted array: ${sortedArray}`);
console.timeEnd("Process Time");