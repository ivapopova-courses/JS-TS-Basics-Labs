const arr1 = [1,2,3];
const arr2 = [4,5];

const merged = arr2.concat(arr1, [1,1]);
console.log(merged); // [4,5,1,2,3,1,1]
