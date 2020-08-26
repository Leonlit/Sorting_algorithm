'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.generateArray(30);

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//remove the second arguments if you want to sort the array in ascending order
let sortedArray = quickSort(arr);

//Quick sort work by first choose a value as the pivot (usually the last value), then separate the values into
//two different arrays: left and right. Depending on the order of the sorting, the value will be divided into two array
//where one array will contains the values that's lower than the pivot while the other contains values that's bigger than it. 
//Then once completed dividing the array into separate groups, we use recursion to get the results.
//during the recursion, the same process as above are repeated until only one or two array value are passed as an parameter
//to the function. When that happens, if the parameter arr contains only one value, we can just return that value to its caller.
//While if the passed value have two value in it, we need to return the value according to the order of the sorting.
//If it's in ascending order, we need to return the value where the bigger value are at the right while the smaller at the left.
//and the opposite are used when the sorting order is in descending order.

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
        //if the current value is bigger than the pivot value
        if (currItem >= pivot){
            //if the order of sorting is descending
            if (descending) {
                //push the bigger number to the left hand side
                left.push(currItem)
            }else {
                //else its in ascending order, so we need to put the value to the right side of the array
                right.push(currItem);
            }
        }else {
            //if the current value is smaller value than the pivot value
            if (descending) {
                //put the value to the right side of the array if the order is in descending
                right.push(currItem);
            }else {
                //while put it to the left side if its in ascending order
                left.push(currItem);
            }
        }
    }
    //console.log(`Sorting pivot: ${pivot}, left: ${left}, right: ${right}\n`);
    return [...quickSort(left, descending), pivot, ...quickSort(right, descending)];
}
console.log(`Sorted array: ${sortedArray}`);
console.timeEnd("Process Time");