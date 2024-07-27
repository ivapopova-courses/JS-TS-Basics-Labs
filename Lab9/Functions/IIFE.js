// IIFE (Immediately Invoked Function Expression).

// Function Expressions:

// let foo;
// // Function Expression
// foo= function(x) {
//     console.log(x);
// };

// // Function statement => Error
// function(x) {
//     console.log(x)
// }

// // Function Expression
// (function(x) {
//     console.log(`x=${x}`)
// });

// bar(
//     // Function Expression
//     function(x) {
//         console.log(`x=${x}`)
//     }
// );

//IIFE (Immediately Invoked Function Expression).
// (function(x) {
//     console.log(`x=${x}`)
// })(3);



// Use Case:
// (function(){
// 	var foo=function() {
// 		console.log(`Foo`);
// 	};

// 	var x = 1;

// 	foo();
// 	console.log(`x=${x}`);
// })();


// console.log(foo);
// console.log(x);



/* -------------------------------- Example 2 ------------------------------- */
function foo() {
    return function(x) {
        console.log(`x=${x}`);
    }(3);
}


foo();

//