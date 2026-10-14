/* -------------------------------- Variables ------------------------------- */
/* -------------------------------- Example 1 ------------------------------- */
// let x = 1;
// let y = "1";
// let z;


// RAM:

//     0034=>x: 0001 // 1
//     0035=>y: 0031 // "1"
//     0036=>z: 0232 // undefined
/* -------------------------------- Exmaple 2 ------------------------------- */
// 'use strict';
// let budgetForNExtYear = 1;
// console.log(budgetForNExtYear); // 1

// budgetForNxtYear = 2; // global variable
// console.log(budgetForNExtYear); // ba


/* -------------------------------- Example 3 ------------------------------- */

// let _ = 1;
// console.log(_); // 1

// let user_name = 1;
// let userName = 2;
// let UserName = 2;


/* -------------------------- Primitive Data Types -------------------------- */
// console.log(1e6); // number
// console.log(1_234_000_000); // number

// console.log( 'a');
// console.log( "a");


// RAM: 
//     021323: 001010101 // 'a'
//     054543: 001010101 // 'a'

// let tmp = 'a';
// console.log( "tmp" ); 
// console.log( 'tmp' ); 

// console.log("ana");
// console.log("a\na");

// console.log('a');


// console.log( "an\"" )
// console.log('x\\t') // 'x\tb'

// let poem = 'line 1\nline 2';
// console.log(poem);

// let poem = `line 1
// line 2`;
// console.log(poem);

// console.log(``);


// let userName = "Ada";
// let userAge = 23;

// console.log(
//     "Hello, " + 
//     userName + 
//     ". You are " +
//     userAge +
//     "!"
// ); // Hello, Ada. You are 23!

// let userAge = 23;

// console.log( userAge );
// console.log(`You are ${userAge}`);

// console.log( 2+2 );
// console.log( "2+2" );
// console.log( `2+2` );
// console.log( `${2+2}` ); 

// let userAge = '23';
// let incr = '1';
// console.log( userAge + incr);//231



// let userName = "Ada";
// let userAge = 23;

// console.log(`Hello, ${userName}. You are ${userAge}!`);
// // Hello, Ada. You are 23!


// if(false){
//     console.log(`Hello`);
// }

// let x = 1;
// let y = 'true';
// let z = false;

// if(z){
//     console.log(`Hello`);
// }



/* ---------------------------- null vs undefined --------------------------- */
// let x;
// console.log(x);

// let y = null;

// const student = {
//     name: {
//         first: 234,
//         last: 'Lovelace'
//     },
//     age: 23
// };

// let x = student.name.first;
// console.log(typeof x); 

// let x = NaN;
// console.log(typeof x); // number

// let res = 4 /"s";

// if(isNaN(res)){
//     res = 0;
// }
// console.log( res + 2); // 


// let x = "abc";


// 2+2 // expression (operand1: 2, operator: +, operand2: 2)

// let x;
// x = 1+2;

let x = 1;
let x = x*2; // 1*2 = 2
console.log(x);



// RAM:
//     0034=>x:0011 //2
