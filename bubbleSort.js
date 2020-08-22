'use strict'

let arr = [...new Array(10)].map(()=> Math.floor(Math.random() * 100));

console.log(`\nOriginal Array: ${arr}\n\n`);

for (let position = 0; position < arr.length; position++) {
    for (let element = 0 ; element < arr.length - position - 1; element++) {
        
        if (arr[element] > arr[element + 1]) {
            console.log(`Sorting for position: ${arr.length - position},` +
                         `\nSwapping element: ${element + 1} and ${element + 2},\nInitial array: ${arr}`);
            arr[element] += arr[element + 1];
            arr[element + 1] = arr[element] - arr[element + 1];
            arr[element] = arr[element] - arr[element + 1];
            console.log(`Modified array: ${arr}\n`);
        }
    }
}

console.log(`\nSorted Array: ${arr}\n`);