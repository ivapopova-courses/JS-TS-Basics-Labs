/* -------------------- Function declared with expression ------------------- */
// const foo = function(x) {
//     return x**2
// };

/* ------------------ Function declared with arrow syntax: ------------------ */
// const bar = x=>{return x**2};
// const bar = x=>x**2;

// console.log( foo(2) );
// console.log( bar(2) );




// const foo = function(x,y) {
//     console.log(`Foo`);
//     return x+y;
// }

// // const f =  (param1, param2, …, paramN) => { statements }
// const bar = (x,y)=>{
//     console.log(`Foo`);
//     return x+y;
// }


// console.log( foo );
// console.log( bar );


/* -------------------------------- Examples -------------------------------- */
// const foo = x=>{x**2};
// // const foo = function(x){
// //     x**2
// // };

// console.log( foo(2) ); // undefined

// const foo = x=>x**2;
// // const foo = function(x){
// //     return x**2
// // };

// console.log( foo(2) ); // 2


/* ---------------------------- Example use case ---------------------------- */
// function setTimeout(f, delay) {
//     // wait(delay);
//     f();
// }

// function greet(){
//     console.log(`Hello`);
// }


// console.log(`Start`);

// // setTimeout( ()=>{console.log(`Hello`)}, 2000);

// setTimeout(() => {

// }, 2000);


