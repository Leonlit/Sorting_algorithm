'use strict'
//generating the example array for the sorting
const utility = require("./utilities.js");
let arr = utility.getSuperLongStaticArray();

console.log(`\nOriginal Array: ${arr}\n\n`);
console.time("Process Time");

//remove the second arguments if you want to sort the array in ascending order
insertionSort(arr, true);

//Insertion sort work by inserting the value to an appropriate index that's lower than it,
//ignoring the elements after it. 
//remove the comments for the console.log to see how the sorting work behind the scene
function insertionSort (arr, descending=false) {
    //iterate through the values
    for (let position = 1 ; position < arr.length; position++) {
        let swapIndex;
        const currItem = arr[position];
            //iterate through the values before the current value's index
        for (let element = position - 1; element >= 0 ; element--) {
            const currIterationItem = arr[element];
            //if the order is in ascending order and the current value is lower than the current value that's at a lower position
            //change the swapIndex value to the current index
            //if the order of the sorting is in descending order, the opposite condition will be used to change the swapIndex value
            if ((currItem < currIterationItem && !descending) || (currItem > currIterationItem && descending) ) {
                if (element == 0) {
                    swapIndex = 0;
                }else {
                    swapIndex = element
                }
            }else if ((currItem >= currIterationItem && !descending) || (currItem <= currIterationItem && descending)) {
                //if the order is in ascending order and the current value is bigger than the current value that's at a lower position
                //that means that we can now swap the value with the value one index higher than the current index value (taking the index from previous loop iteration).
                //Just like above, if the order of sorting is in descending order the opposite condition would be used to initiate the swapping.
                break;
            }else {
                swapIndex =0;
            }
        }
        //if the variable is not undefined means the number need to be changed
        if (swapIndex != undefined) {
            console.log(`before: ${arr}`);
            const currItem = arr[position];
            //shifting the numbers to the right
            console.log(`Shifting element from ${swapIndex + 1} until ${position} to the right and change element ${position + 1} to ${swapIndex + 1}`);
            for (let swap = position; swap > swapIndex ;swap--) {
                arr[swap] = arr[swap-1];
            }
            arr[swapIndex] = currItem;
            console.log(`after: ${arr}\n`);
        }
    }
    console.log(`\nSorted Array: ${arr}\n`);
    console.timeEnd("Process Time");
}