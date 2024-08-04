// Task: say Hello after 5 seconds

// // With function declaration
// setTimeout( function (){
//     console.log(`Hello`)
// }, 2000);

// // With arrow syntax
// setTimeout( ()=>{console.log(`World`)}, 2000);

// Start: (12.01.00)
// Hello  ((12.01.02))
// World (12.01.02)


/* ---------------------- Call function with arguments ---------------------- */
// // Variant 1
// setTimeout( userName => {
//     console.log(`Hello, ${userName}`);
// }, 1000, 'Maria');

// // Variant 2
// function greet(userName){
//     console.log(`Hello, ${userName}`);
// };

// const timer1ID = setTimeout( ()=>{greet('Maria')}, 1000);
// console.log(timer1ID);



/* ------------------------------- setInterval ------------------------------ */
// setInterval((userName) => {
//     console.log(`Hello ${userName}`);
// }, 1000, 'Maria');



/* ---------------------------------- TASK ---------------------------------- */
// Log in 1 second "hello", but stop after 5 seconds


// const intervalID = setInterval(() => {
//     console.log(`Hello`);
// }, 1000);


// setTimeout(()=>{clearInterval(intervalID)}, 5000);