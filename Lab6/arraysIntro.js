/* ----------------------------- Why use arrays ----------------------------- */
// Store next data:
// Maria => 5
// // Pesho => 3


// let user1Name = 'Maria';
// let user2Name = 'Pesho';
// let user1Score = 5;
// let user2Score = 3;

// // Define Array
// let userNames = ['Maria', 'Pesho'];
// let userScores = [5, 3];


// console.log( userNames);
// console.log( userNames[0] );


// // RAM:
//     user1Name:0x123: 'Maria',
//     user2Name:0x128: 'Pesho',
//     userNames:0x430: 0x431, 0x439
//     userNames[0]:0x431: 'Maria'
//     userNames[1]:0x439: 'Pesho'

/* ------------------------------ Define array ------------------------------ */
// let arr = [
//     1,
//     'hi'
// ];

// console.log(arr);
// console.log( typeof(arr) );

// let arr1 = [1,,,3];
// let arr2 = [1,3];
// console.log( arr1.length );
// console.log( arr2.length );


/* ----------------------------- Array Indexing ----------------------------- */
// 2+2
// let arr = [1,2,3,4,5];
// let x = 1;

// console.log( x );
// console.log( arr[2] + 2);
// console.log( arr[1+1] + 2);

// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log( arr[0] );
// arr[0] = 9;
// console.log(arr);

// RAM:
//     arr:0x123: 0x323, 0x423
//     arr[0]:0x323:1
//     arr[1]:0x423:2

// let arr = [1,2,3,4,5];
// console.log( arr[4] );
// console.log( arr[100] );

// console.log( arr );
// arr[100] = 9;
// console.log( arr );

// let arr = [1,2,3,4,5];
// console.log( arr[-1] );

// arr[-1] = 999;
// console.log(arr);

// let arr = [1,2,3];
// arr.unshift(9);
// console.log(arr);


// let arr = [];
// arr[0] = 1;
// arr[1] = 2;

// arr.unshift(3);
// arr.unshift(4);

// console.log(arr); // [4,3,1,2]


// let arr = [];
// arr.push(1)
// arr.push(2)
// console.log(arr);

// let arr = [1,2,3];

// arr.reverse();
// console.log(arr);

// let arr = [1,2,3];
// arr.shift();
// console.log(arr);
// arr.pop()
// console.log(arr);

// let arr = [4,2,3,6,2];
// arr.sort()
// console.log(arr);
// console.log(`min element: ${arr[0]}`);

/* ----------------------------- length property ---------------------------- */
// let arr = [1,2,3];
// console.log(arr.length);
// arr.pop();
// console.log(arr.length);

// arr.length = 0;
// console.log(arr);

// Get last array element:
// arr = [1,2,3,4,5,6];

// console.log(arr.length-1);
// console.log(arr[arr.length-1]);


// let arr = [2,4,6];
// // console.log( arr.length );// 3

// if ( arr.length === 0 ){
//     console.log( "Empty array!")
// }else{
//     console.log( "Not empty" );
// }

// console.log(arr); // []

// let x = 0;
// if( x=0 ){
//     console.log(`1`);
// }else{
//     console.log(`2`);
// }

// console.log(x);// 0
