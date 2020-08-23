const STATIC_ARRAY = [40, 20, 70, 10, 60, 30, 90, 80, 50, 110, 100, 130, 150, 120, 200, 180, 190, 170, 160, 140];
const LONG_STATIC_ARRAY = [68,80,36,80,45,61,23,58,61,54,23,24,81,5,71,98,7,40,53,1,87,23,14,52,92,25,82,67,21,65,7,76,5,4,59,69,26,76,15,51,42,36,88,38,33,93,58,11,54,70,43,38,40,20,3,31,11,16,41,45,65,10,88,83,38,31,29,58,24,21,59,80,92,99,32,21,72,81,32,55,63,13,39,33,8,55,26,67,19,3,29,27,70,23,43,37,3,41,88,40];

//use to generate random array with the specified size
function generateArray (size) {
    return [...new Array(size)].map(()=> Math.floor(Math.random() * 100));
}

//return the static array
function getStaticArray () {
    return STATIC_ARRAY;
}

//return half of the array
function getHalfStaticArray () {
    return STATIC_ARRAY.slice(0, STATIC_ARRAY.length/2);
}

function getLongStaticArray () {
    return LONG_STATIC_ARRAY
}

function getHalfLongStaticArray () {
    return LONG_STATIC_ARRAY.slice(0, LONG_STATIC_ARRAY.length/2);
}

module.exports = {generateArray, getStaticArray, getHalfStaticArray, getLongStaticArray, getHalfLongStaticArray}