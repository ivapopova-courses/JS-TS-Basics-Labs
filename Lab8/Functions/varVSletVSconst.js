// {
//     var x = 2;           // x e глобална променлива
// 	let y = 4;           // y e видима само в текущия блок
// 	const alpha = 2.34;  // alpha e видима само в текущия блок
// }

// console.log(`x in global: ${x}`); //2
// console.log(`y in global: ${y}`); //Reference error



// block scope ={
//     y: 4,
//     alpha: 2.34
// }
// global = {
//     x:2
// }


/* -------------------------------- Example 1 ------------------------------- */
// for (var i = 0; i < 3; i++) {
//     console.log(`i in for: ${i}`);
// }

// console.log(`i in global: ${i}`); //3

// // global = {
// //     i: 3
// // }



// for (let i = 0; i < 3; i++) {
//     console.log(`i in for: ${i}`);
// }

// console.log(`i in global: ${i}`); //3

// for block = {
//     i:3
// }
// global = {
//
// }


/* -------------------------------- Example 2 ------------------------------- */

// let userAge = 23;
// if(userAge){
//     let x = 1;
//     console.log(`x in if: ${x}`);
// }


// // let x = 9;
// console.log(`x in global: ${x}`);




/* --------------------------- Redeclaring Example -------------------------- */
// let x = 1;


// if(true){
//     let x = 8;
//     console.log(x);
// }

// console.log(x);


// var x = 9;


// // block if = {
// //     x:8
// // }
// // global = {
// //     x:1
// // }



/* ------------------------------ Const vs Let ------------------------------ */
// let x;
// x = 1;

// const PI=3.145;
// PI=4;


// const arr = [1,2,3];
// arr[0]=9;
// console.log(arr);

