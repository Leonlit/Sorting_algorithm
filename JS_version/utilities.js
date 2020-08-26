//20 values
const STATIC_ARRAY = [40, 20, 70, 10, 60, 30, 90, 80, 50, 110, 100, 130, 150, 120, 200, 180, 190, 170, 160, 140];
//100 values
const LONG_STATIC_ARRAY = [68,80,36,80,45,61,23,58,61,54,23,24,81,5,71,98,7,40,53,1,87,23,14,52,92,25,82,67,21,65,7,76,5,4,59,69,26,76,15,51,42,36,88,38,33,93,58,11,54,70,43,38,40,20,3,31,11,16,41,45,65,10,88,83,38,31,29,58,24,21,59,80,92,99,32,21,72,81,32,55,63,13,39,33,8,55,26,67,19,3,29,27,70,23,43,37,3,41,88,40];
//500 values
const SUPER_LONG_STATIC_ARRAY = [525,120,281,166,505,317,135,618,345,467,46,748,554,544,855,311,99,914,710,202,542,447,529,596,649,625,84,32,629,656,478,201,226,488,247,853,910,633,4,611,538,899,428,617,943,194,805,260,475,341,67,120,592,231,123,512,991,288,117,634,240,698,730,561,554,808,697,552,300,86,523,724,205,851,669,485,868,311,732,558,783,587,441,605,879,580,982,41,232,513,545,961,460,922,798,854,62,76,719,568,815,972,262,957,92,253,135,423,937,460,645,455,449,713,557,596,846,880,861,12,624,847,154,796,795,339,722,265,622,939,187,157,817,301,641,3,192,88,866,64,518,986,806,973,904,175,424,64,324,660,891,986,667,704,877,214,434,216,330,520,193,229,511,2,266,407,510,335,377,192,336,647,328,873,647,586,87,360,878,15,626,610,870,589,264,566,364,777,154,693,173,792,162,673,871,478,298,310,298,428,772,813,958,714,13,717,287,22,313,61,459,508,519,826,428,139,696,826,132,3,776,325,891,227,5,498,177,636,141,903,306,722,21,617,397,406,544,418,609,252,465,481,745,241,888,712,153,76,522,243,271,217,104,936,368,268,879,466,245,859,851,341,213,493,382,766,537,805,792,847,564,91,380,419,687,195,70,208,152,534,807,660,921,361,200,30,382,580,220,204,893,636,884,634,506,56,564,593,400,497,743,207,246,286,201,449,445,772,970,739,451,126,264,299,606,25,2,188,333,577,951,687,376,776,845,443,519,372,630,801,512,572,407,299,377,419,311,315,503,976,389,436,100,885,26,975,752,708,77,728,816,509,976,853,669,29,447,245,412,516,139,630,693,134,633,189,220,806,216,803,737,317,485,288,117,885,427,923,597,18,422,957,390,352,142,435,645,931,383,358,240,133,662,474,278,111,899,523,72,807,24,63,573,53,658,82,840,979,651,428,292,758,698,344,969,61,258,409,34,480,733,886,193,898,269,599,990,569,779,702,82,830,827,142,386,947,78,327,377,706,514,291,98,36,874,540,480,757,9,987,242,373,316,291,434,203,58,139,942,299,193,709,848,236,245,998,347,64,650,672,108,870,948,766,794,878,650,484,792,873,383,523,978,38,176,275,407,144,946,780,312,607,627,217,115,423,367,593,42,606]

//use to generate random array with the specified size
function generateArray (size) {
    return [...new Array(size)].map(()=> Math.floor(Math.random() * (size * 2)));
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

function getSuperLongStaticArray () {
    return SUPER_LONG_STATIC_ARRAY;
}

function getHalfSuperLongStaticArray () {
    return SUPER_LONG_STATIC_ARRAY.slice(0, SUPER_LONG_STATIC_ARRAY.length/2);
}

module.exports = {generateArray, getStaticArray, getHalfStaticArray, getLongStaticArray,
                 getHalfLongStaticArray, getSuperLongStaticArray, getHalfSuperLongStaticArray}