'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.generateArray(10);

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//remove the second arguments if you want to sort the array in ascending order
let sortedArray = HeapSort(arr);

function HeapSort (arr, descending = false) {
    const size = arr.length;
    const functionObj = (descending) ? heapifyDsc : heapify;
    
    for (let index = Math.floor(size/2) - 1; index >= 0; index--) {
        functionObj(arr, size, index);
    }

    for (let index = size - 1; index> 0;index--) {
        arr[0] += arr[index];
        arr[index] = arr[0] - arr[index];
        arr[0] = arr[0] - arr[index];
        functionObj(arr, index, 0);
    }
    return arr;
}

function heapify (arr, size, currIndex) {
    let largest = currIndex;
    const left = 2 * currIndex + 1;
    const right = 2 * currIndex + 2;
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== currIndex) {
        arr[currIndex] += arr[largest];
        arr[largest] = arr[currIndex] - arr[largest];
        arr[currIndex] = arr[currIndex] - arr[largest];
        heapify(arr, size, largest);
    }
}

function heapifyDsc (arr, size, currIndex) {
    let smallest = currIndex;
    const left = 2 * currIndex + 1;
    const right = 2 * currIndex + 2;
    if (left < size && arr[left] < arr[smallest]) {
        smallest = left;
    }
    if (right < size && arr[right] < arr[smallest]) {
        smallest = right;
    }
    if (smallest !== currIndex) {
        arr[currIndex] += arr[smallest];
        arr[smallest] = arr[currIndex] - arr[smallest];
        arr[currIndex] = arr[currIndex] - arr[smallest];
        heapifyDsc(arr, size, smallest);
    }
}

console.log(`Sorted array: ${sortedArray}`);
console.timeEnd("Process Time");