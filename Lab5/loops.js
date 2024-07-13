/* -------------------------------- For loop -------------------------------- */
// let i = 0;

// for( ; i<3; i++ ){
//     console.log(i);
// }


// // RAM:
// //     i:0x123: 3


// // OUTPUT:
// // 0
// // 1
// // 2

/* -------------------------------- Examples ------------------------------- */
/* ------------------------ TASK: calc. sum of [1..5] ----------------------- */
// 1,2,3,4,5

// let curentSum = 0;
// for(let i=1; i<6; i++){
//     console.log(i);
//     curentSum = curentSum+i
// }
// console.log(`total sum: ${curentSum}`);

// console.log( '~'.repeat(5));

/* ------------------------------- while loop ------------------------------- */
// let userTries = 5;

// while(userTries>0){
//     console.log(userTries);
//     userTries--
// }

/* ----- TASK: generate random integer numbers in [0..10], while reach 5 ---- */
// Variant 1 (not ok)
// let number = Math.round(Math.random()*10);
// let myNumber = 5;

// while( number!=myNumber ){
//     number = Math.round(Math.random()*10);
//     console.log(number);
// }

// Variant 2 (best)
// let number;
// let myNumber = 5;

// do{
//     number = Math.round(Math.random()*10);
//     console.log(number);
// }while( number!=myNumber );

// Variant 3 (not ok,wrong) with endless for loop and break

// let number;
// let myNumber = 5;
// for(;;){
//     number = Math.round(Math.random()*10)
//     console.log(number);
//     if(number===myNumber){
//         break;
//     }
// }

/* ------------------------- Statement vs Expression ------------------------ */
// console.log(`1`); // expression (undefined)
let x;   // statement
x=5;    // expression

2+2; // expression (4)
x;   // expression (5)
9;   // expression (9)

if(1){console.log(`hi`)} // statement

// console.log( console.log(`1`) );