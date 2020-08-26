'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
const arr = utility.getSuperLongStaticArray();

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//remove the second arguments if you want to sort the array in ascending order
const sortedArray = mergeSort(arr, true);
console.log(`Sorted Array: ${sortedArray}\n`);
console.timeEnd("Process Time");

//merge sort work by continously dividing array into half (also a divide and conquer technique like quick sort)
//then when the division reached the end (only one value are left in the array), the value will be returned back to the 
//previous level. Afer the values are returned into the previous level, they'll be combined and reordered into order befores being returned
//back to another level. The sorting will end after the final merge (from the initial level) have done its execution.
function mergeSort (arr, descending=false) {
    if (arr.length == 1) return arr;
    //if there's only two value around we can't return 0 to the divider, that produce a 0 which aren't really hekoting 
    let divider = arr.length >> 1 | 0;
    if (divider == 0) divider++;
    //dividing the array to two parts
    let left = mergeSort(arr.splice(0, divider), descending);
    arr = mergeSort(arr, descending);
    //using recursion to continously dividing the array
    return merge (left, arr, descending);
}

//combining the array before return their values to previous level
function merge (left, right, descending) {
    let merged = [];
    //passing in the smallest or biggest value (depending on the orders) into the merged array
    //since one value will be pushed into the array. This operation will only happen if there's still value in both 
    //side of the array
    while (left.length && right.length) {
        if ((left[0] > right[0] && !descending ) || (left[0] < right[0] && descending )) {
            merged.push(right[0]);
            right.shift();
        }else {
            merged.push(left[0]);
            left.shift();
        }
    }
    //The remaining value in both of the array will means that they're either smaller (or bigger depending on the sorting order)
    //than the available values in the merged array. This is where we insert all array element from the both side into the array
    //we start by inserting the left side array as the values there will be definitely be smaller (or bigger depending on order of sorting)
    //than the values at the right side array.
    merged.push(...left);
    merged.push(...right);

    return merged;
}

