/* ------------------------------- Syntax demo ------------------------------ */

[1,2,3,4].forEach( (element, idx, arr) => {
    console.log(`element=${element}`);
    console.log(`idx=${idx}`);
    console.log(`arr=${arr}`);
    console.log(`\n`);
});





/* --------------------- variants for "For loops" in JS: -------------------- */
// let numbers = [1,2,3];

// console.log(`Classic for`);
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// };

// console.log(`For ...of demo`);
// for (const element of numbers) {
//     console.log(element);
// }

// console.log(`array.forEach() method`);
// numbers.forEach( element=>console.log(element) );
