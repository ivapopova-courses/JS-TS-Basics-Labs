/* ----------------------------------- if ----------------------------------- */

// console.log(`1`);

// if (true) {
//     console.log(`2`);
//     console.log(`2`);
//     console.log(`2`);
//     console.log(`2`);
// }

// console.log(`3`);

// TASK: log 'Even' if x is even
// let x = 8;

// if (x%2===0) {
//     console.log(`Even`);
// }

// let x = 9;

// console.log( !(x%2) );
// if( !(x%2) ){
//     console.log(`Even`);
// }

// TASK: log 'Odd' if x is odd
// let x = 5;
// if(x%2){
//     console.log(`Odd`);
// }



/* --------------------------------- if-else -------------------------------- */
// TASK: if user is adult => 'Welcome', 'Go home'
// let userAge = 10;

// if(userAge>=18){
//     console.log(`Welcome`);
// }else{
//     console.log(`Go home`);
// }

// console.log(`END`);


// TASK:
// log 'Even' if x is even
// log 'Odd' if x is odd

// let x = 8;

// if (x%2) {
//     console.log(`Odd`);
// }else{
//     console.log(`Even`);
// }


// TASK:
// log 'Even' if x is even
// log 'Odd' if x is odd
// log 'Zero' if x is 0


// let x = 8;
// // console.log( x%2 );// 0

// // BAD VARIANT
// if (x%2) {
//     console.log(`Odd`);
// }else{
//     if(x===0){
//         console.log(`Zero`);
//     }else{
//         console.log(`Even`);
//     }
// }

// // GOOD VARIANT
// if (x%2) {
//     console.log(`Odd`);
// }else if(x===0){
//     console.log(`Zero`);
// }else{
//     console.log(`Even`);
// }



// TASK:
//    if userInput = 'Login' => console.log(`Login`);
//    if userInput = 'Deposit' => console.log(`Deposit`);
//    if userInput = 'Withdraw' => console.log(`Withdraw`);
//    if useInput = 'Logout' => console.log(`Logout`);


let userInput = 'Deposit';

// if(userInput==='Login'){
//     console.log(`Login`);
// }else if(userInput==='Deposit'){
//     console.log(`Deposit`);
// }else if(userInput==='Withdraw'){
//     console.log(`Withdraw`);
// }else if(userInput==='Logout'){
//     console.log(`Logout`);
// }else{
//     console.log('invalid user input')
// }

// switch (userInput) {
//     case 'Login':
//         console.log(`Login`);
//         break;
//     case 'Deposit':
//         console.log(`Deposit`);
//         break;
//     case 'Withdraw':
//         console.log(`Login`);
//         break;
//     case 'Logout':
//         console.log(`Logout`);
//         break;

//     default:
//         console.log('invalid user input')
// }


/* ---------------------------- Ternary Operator ---------------------------- */
// let res = 3>5?'a':'b';
// console.log( res ); //'b'



// Example
let userAge = 19;

// BAD VARIANT
// let userStatus;
// if(userAge>=18){
//     userStatus="adult"
// }else{
//     userStatus='child'
// }

// GOOD VARIANT
let userStatus = userAge>=18?'adult':'child' ;

console.log(userStatus);