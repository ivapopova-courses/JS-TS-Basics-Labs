/* --------------------------- Why using functions -------------------------- */

// // Make Pancace
// for (let i = 0; i < 3; i++) {
//     console.log(`1. Get 3 eggs`);
//     console.log(`2. Add water`);
//     console.log(`3. Turn on oven.`);
// }

// Calculate Poweer
// let base = 2;
// let exponent = 10;

// let result = base;
// for (let i = 0; i <exponent ; i++) {
//     result*=base
// }
// calulatePower(2,10);

// console.log(result);

// calulatePower(3,5);


// console.log(`1. Get 3 eggs`);
// console.log(`2. Add water`);
// console.log(`3. Turn on oven.`);


/* -------------------------- Function Definition -------------------------- */
// let x = 1;

// let userName = `
//     console.log(1. Get 3 eggs);
//     console.log(2. Add water);
//     console.log(3. Turn on oven.);
//     console.log(*.repeat(30);
// `;

// let numbers = [1,2,3];
// console.log( numbers[0] );

// // Variant 1: Define function with Function Declaration
// function makePancake() {
//     console.log(`1. Get 3 eggs`);
//     console.log(`2. Add water`);
//     console.log(`3. Turn on oven.`);
//     console.log(`*`.repeat(30));
// };


// // Variant 2:
// let makePancake=function() {
//     console.log(`1. Get 3 eggs`);
//     console.log(`2. Add water`);
//     console.log(`3. Turn on oven.`);
//     console.log(`*`.repeat(30));
// };


// RAM:
//     x:           0x173: 00001001 (5)
//     userName:    0x123: 0000001010010101010101001010101
//                         0000001010010101010101001010101
//                         0000001010010101010101001010101
//     numbers:     0x564: 010101010101
//                         010101010101
//                         010101010101
//     makePancake: 0x123: 01010101010100101 //console.log(`1. Get 3 eggs`);
//                         01010101010100101 //console.log(`2. Add water`);
//                         01010101010100101 //console.log(`3. Turn on oven.`);
//                         01010101010100101 //console.log(`*`.repeat(30));


// makePancake();
// makePancake();
// makePancake();

/* --------------------------- Function Parameters -------------------------- */
// function makePancake(liquid,amount = 5) {
//     // amount = amount || 5;

//     // let liquid = 'watter;
//     console.log(`START`);
//     // let liquid = 'milk'
//     console.log(`1. Get ${amount} eggs`);
//     console.log(`2. Add ${liquid}`);
//     console.log(`3. Turn on oven.`);
//     console.log(`*`.repeat(30));
// };


// makePancake('watter');


/* --------------------- Functuin Call Value (Return..) --------------------- */
// function calculateSum(x,y) {
//     console.log(`x+y=${x+y}`);
//     return x+y;
//     console.log(`END`);
// }

// console.log( `sum(2,3)=${calculateSum(2,3)}` );


// let sum = calculateSum(2,3) + 1;
// console.log(`sum=${sum}`);









