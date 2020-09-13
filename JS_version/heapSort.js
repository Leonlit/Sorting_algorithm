'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.generateArray(100);

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

// To perform a heap sort
// 1. build a min or max heap according to sorting order
// 2. Swap the first element with the last element
// 3. limits the array search index 1 index lower from the last element (sorted part of the array)
// 4. build back the min or max heap again
// 5. repeat steps from 2 again until the array is sorted (until one element is left).

//remove the second arguments if you want to sort the array in ascending order
let sortedArray = HeapSort(arr);

function HeapSort (arr, descending = false) {
    const size = arr.length;
    //choose which function to be used (for building max and min-heap as well as sorting the heap)
    const functionObj = (descending) ? heapifyDsc : heapify;
    
    //building the max or min-heap by heapifying the elements
    for (let index = Math.floor(size/2) - 1; index >= 0; index--) {
        functionObj(arr, size, index);
    }

    //sorting the heap
    for (let index = size - 1; index> 0;index--) {
        //since the first element (after building the max/min-heap) is the highest/lowest node of the array
        //when can swap it with the last element of the array and limits our array size for the next loop 
        //when the next loop begin, same as previously, the first element is swapped to the last index (of the limited
        //array)
        arr[0] += arr[index];
        arr[index] = arr[0] - arr[index];
        arr[0] = arr[0] - arr[index];
        functionObj(arr, index, 0);
    }
    return arr;
}

//Building a max heap 
//the function takes in the array to be work with, the size of the array (total), and
//the current index of the node
function heapify (arr, size, currIndex) {
    let largest = currIndex;
    //finding the left and right desendent node for the current node
    const left = 2 * currIndex + 1;
    const right = 2 * currIndex + 2;
    //then find which one of them is bigger than the other two when compared with the current node
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }
    //If the index is not the original node index, it means that the node will need to change place with the biggest node
    //among them three
    if (largest !== currIndex) {
        arr[currIndex] += arr[largest];
        arr[largest] = arr[currIndex] - arr[largest];
        arr[currIndex] = arr[currIndex] - arr[largest];
        heapify(arr, size, largest);
    }
}

//building a min-heap as well as sorting the heap in descending order. Everthing is the same as the heapify function
//just that the value compared to see which of them is the lowest
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