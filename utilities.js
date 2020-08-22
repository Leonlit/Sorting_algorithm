function generateArray (size) {
    return [...new Array(size)].map(()=> Math.floor(Math.random() * 100));
}

function getStaticArray () {
    return [10, 20, 30, 40, 60, 70, 90, 80, 50, 110, 100, 130, 150, 120, 200, 180, 190, 170, 160, 140];
}


module.exports = {generateArray, getStaticArray}