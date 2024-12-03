// //var vs let/const : redeclaring
// const x = 5;

// var x = 'pesho';
// console.log(x);


/* ------------------------------ Let vs Const ------------------------------ */
// let x = 5;
// const PI=3.14;


// x = 6;
// PI=3.14;


// const userData = ['Ada', 34];

// userData[1] = 56;

// console.log(userData);


// RAM:
//     userData: 0x123: 0x456, 0x526
//           [0]:0x456: 'Ada'
//           [0]:0x526: 56


// function foo(x) {
//     x[0] = 5;
// }

// let a = 1;
// const userData = ['Ada', 34];
// foo( userData );
// console.log( userData );  //?


// // RAM:
// //            a: 0x130: 1
// //        foo-x: 0x141: 0x456, 0x526
// //     userData: 0x123: 0x456, 0x526
// //           [0]:0x456: 5
// //           [1]:0x526: 56



/* --------------------- Copy by Value and by reference --------------------- */
// let x = [1,2,3];
// let copy = x;


// x[0] = 10;
// console.log(x, copy);//10,

// RAM:
//     x: 0x130: 0x543, 0x544, 0x545
//     [0]:0x543: 10
//     [1]:0x544: 2
//     [2]:0x545: 3
//  copy: 0x132: 0x543, 0x544, 0x545


