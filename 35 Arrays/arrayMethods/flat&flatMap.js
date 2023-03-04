// flat method works best with  nested arrays 

const arr= [[1,2,3],4,5,[6,7,8]]
const arr1= [[9,1,[1,2,3],4,5,[6,7,8]]]

console.log(arr.flat())
console.log(arr1.flat(2))

//flat map 
//The flatMap() method uses a combination of the map() and flat() methods to perform operations.

const arr4 = [1, 2, [3, [4, 5, [6, 7]]]];

console.log(arr4.flatMap((element) => element).flat(2));

// expected output
// [1, 2, 3, 4, 5, 6, 7];