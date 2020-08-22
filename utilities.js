const STATIC_ARRAY = [10, 20, 30, 40, 60, 70, 90, 80, 50, 110, 100, 130, 150, 120, 200, 180, 190, 170, 160, 140];

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

module.exports = {generateArray, getStaticArray, getHalfStaticArray}