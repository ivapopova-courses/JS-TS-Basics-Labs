/* -------------------------------- Example 1 ------------------------------- */
// // global scope
// function bar(y) {
//     let x = 5;
//     console.log(`x in bar: ${x}`);
//     console.log(`y in bar: ${y}`);
// };

// let x = 1;
// bar(9);
// console.log(`x in global: ${x}`);
// console.log(`y in global: ${y}`);


// // bar = {
// //     y:0x545 (9)
// //     x:0x546 (5)
// // }

// // global = {
// //     bar:0x123,
// //     x:  0x345 (1)
// // }


/* -------------------------------- Example 2 ------------------------------- */
// function foo(x) {
//     let y = 1;
//     console.log(`x in foo: ${x}`);
//     console.log(`y in foo: ${y}`);
// }

// let bar = function(x){
//     let y = 1;
//     foo(2);
//     console.log(`x in bar: ${x}`);
//     console.log(`y in bar: ${y}`);
// }

// bar(1);
// console.log(`x in global: ${x}`);

//output:
// x in foo:2
// y in foo:1
// x in bar:1
// y in bar:1
// Reference error


// global = {
//     foo:0x123: 010101010100101 (function foo)
//     bar:0x123: 010101010100101 (function bar)
// }

// bar = {
//     x:1,
//     y:1
// }

// foo = {
//     x:2,
//     y:1
// }



/* -------------------------------- Example 3 ------------------------------- */
// function foo (x) {
//     function bar(x) {
//         x = 10;
//         console.log(y);
//         console.log(`x in bar: ${x}`);
//     }
//     bar(1);


//     // let y = 100;
//     console.log(`y in foo: ${y}`);
// }


// foo(100);

// bar = {
//     x:0x543 (10)
// }

// foo={
//     x: 0x123 (100);
//     bar:0x234 (bar)
//     y: 0x343 (undefined,*)
// }

// global = {
//     foo: 0x123: function foo
// }


// output:
// x in bar: 10
// y in foo: 100


/* -------------------------------- Example 4 ------------------------------- */

// function foo () {
//     function bar() {
//         console.log(`x in bar: ${x}`); //1
//     }
//     bar();
//     console.log(`x in foo: ${x}`); //1

// }

// let x = 1;
// foo();
// bar();// Error


// bar = {

// }

// foo = {
//     bar: [function],
// }

// global = {
//     foo: [function],
//       x:1
// }