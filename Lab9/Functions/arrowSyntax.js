/* -------------------------------- Example 1 ------------------------------- */
// const pi = 3.14;

// // function expression syntax:
// let circleAreaExp = function(r){
// 	return r*r*pi;
// }

// let circleAreaExpArrow = r=>r*r*pi;

// let area = circleAreaExpArrow(2);
// console.log(area);


/* -------------------------- Example 2 (Use case) -------------------------- */
// function calc(f, x, y) {
//     return f(x,y)
// }


// let res = calc(function(x,y) {
//     return x+y
// }, 2, 3);

// let res = calc((x,y)=>x+y, 4, 3);

// console.log(res);



/* ------------------------------ Arrow Syntax ------------------------------ */
// (param1, param2, …, paramN) => { statements }

// let foo = function(param1, param2, …, paramN) {
//   statements
// }


// let foo = function(x) {
//     console.log(x);
// }


// "single parameter":
// let fooArr = x=>{
//     console.log(x);
// }

// // foo(5);
// fooArr(5,4);

// single expression in body
// let foo = function(x,y) {
//     return x+y
// }

// let fooArr = (x,y)=>x+y;


// console.log( fooArr(2,3) );

/* -------------------------------- Examples -------------------------------- */
// function add(x,y) {
//     return x+y;
// }

// console.log( add(2,3) );


// let addArr = (x,y)=>{x+y};
// let addArr = (x,y)=>x+y;

// console.log( addArr(2,3) );


// console.log(add);
// console.log(addArr);


/* ----------------- 'this' and 'arguments' in arrow syntax ----------------- */
// function foo() {
//     console.log(this);
// }

// let fooArr = ()=> {
//     console.log(this);
// }

// // foo();
// fooArr();

// function foo() {
//     console.log(arguments);
// }

// foo(2);
// foo(2,3);
// foo(2,3,4);

// let fooArr = ()=>{
//     console.log(arguments);
// }

// fooArr(2);
// fooArr(2,3);
// fooArr(2,3,4);


