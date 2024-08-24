/* ------------------------------- Array.map() ------------------------------ */
// *** Syntax demo
// const mappedArray =[1,2,3].map( (el, idx, arr)=>{
//     console.log(`el: ${el}`);
//     console.log(`idx: ${idx}`);
//     console.log(`arr: ${arr}`);
//     console.log(`\n`);

//     return idx;
// } );

// console.log(mappedArray);

// *** Example 1
// let numbers = [1,2,3];

// // Variant 1: Without map:
// let squareNumbers = [];
// for (const number of numbers) {
//     squareNumbers.push(number**2)
// }

// console.log(numbers);
// console.log(squareNumbers);



// // Variant 2: With map()
// const squareNumbers = numbers.map( number=>number**2 );

// console.log(numbers);
// console.log(squareNumbers);



// *** TASK: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities
// let cities = [
//     {name: 'Sofia', population: 1_236_000},
//     {name: 'Plovdiv', population: 343_424 },
//     {name: 'Burgas', population: 202_766},
//     {name: 'Varna', population: 335_177},
// ];

// // YOUR CODE HERE:
// const cityNames = cities.map( city=>city.name )

// // TEST:
// console.log(cityNames);

// // EXPECTED OUTPUT:
// // [ 'Sofia', 'Plovdiv', 'Burgas', 'Varna' ]



/* ----------------------------- Array.filter() ----------------------------- */
// *** Syntax demo
// const filteredArray =[1,2,3].filter( (el, idx, arr)=>{
//     console.log(`el: ${el}`);
//     console.log(`idx: ${idx}`);
//     console.log(`arr: ${arr}`);
//     console.log(`\n`);

//     return false;
// } );

// console.log(filteredArray);



// // TASK: create evenNumbers array ffrom even numbers in numbers
// const numbers = [1,2,3,4,5];
// // let evenNumbers = [];
// // for (const number of numbers) {
// //     if(number%2===0){
// //         evenNumbers.push(number)
// //     }
// // };

// const evenNumbers = numbers.filter( number=> number%2===0 )

// console.log(numbers);
// console.log(evenNumbers);


// // TASK: filter only cities which population is greater than 340_000
// let cities = [
//     {name: 'Sofia', population: 1_236_000},
//     {name: 'Plovdiv', population: 343_424 },
//     {name: 'Burgas', population: 202_766},
//     {name: 'Varna', population: 335_177},
// ];

// // YOUR CODE HERE:
// const filtered = cities.filter( city=> city.population>340_000 );
// // TEST:
// console.log(filtered);


/* ----------------------------- Array.reduce() ----------------------------- */
// *** Syntax demo:

// let output = [1,2,3,4].reduce( (acc, curr)=> {
// 	console.log(acc,curr)
//     console.log(`\n`);
//     return acc+curr
// }, 0 );



// TASK: reduce [1,2,3] to sum of its elements:
// const numbers = [1,2,3];
// let sum = 0;
// for (const number of numbers) {
//     sum+=number
// };
// console.log(`sum=${sum}`);


// const input = [1,2,3];
// let output = input.reduce( (acc, curr)=> acc+curr );

// console.log(input);
// console.log(output);


// TASK: sum of squared even numbers
// const input = [1,2,3,4];


// const res = input
//                 .filter( number=>number%2===0)
//                 .map(number=>number**2)
//                 .reduce((a,c)=>a+c)

// console.log(res);


