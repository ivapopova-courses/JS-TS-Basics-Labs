// let x = 1;
// let foo = function(){
//     console.log(`Ada`);
// };

/* --------------------------- Array of functions --------------------------- */
// let arr = [
//     function(x) {
//         console.log(`x in anon1: ${x}`);
//         return x**2;
//     },
//     function(x) {
//         console.log(`x in anon1: ${x}`);
//         return x/2
//     }
// ];


// let y = arr[0](7);
// console.log(y); //?


// let foo = arr[0];
// console.log( foo(7) );

// function() {
//     console.log(`foo`);
// }




/* ---------------------------- Callback function --------------------------- */
// function caller(callback) {
//     console.log(`Caller will call the callback!`);
//     callback()
// }

// function foo() {
//     console.log(`Foo`);
// }

// caller( foo );




// // Caller will call the callback!
// // Foo


// function writeToDB() {
//     console.log(`writeToDB`);
// }

// function logAndWriteToDB(f) {
//     console.log(`writeToDB is  called at time`);
//     f()
// }


// logAndWriteToDB(writeToDB);
// logAndWriteToDB(writeToDB);



/* ----------------------------- setTimeout demo ---------------------------- */
// function setTimeout(f, delay) {
//     // wait(delay);
//     f();
// }

// function greet(){
//     console.log(`Hello`);
// }


// console.log(`Start`);

// setTimeout( greet, 2000);

// Start
// Hello
// Error

/* ------------------------ Functions as return value ----------------------- */
function foo() {
    console.log(`Foo`);
    return baz;
}

function baz() {
    console.log(`Hello`);
}


// let bar = foo();
// bar();

foo()();














