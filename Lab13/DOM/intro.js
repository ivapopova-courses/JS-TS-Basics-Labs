/* -------------------------- window gloabl object -------------------------- */
// console.dir(window);

// window = {
//     setTimeout: function(f, delay) {
//         f()
//     },
//     Math:{
//         PI:3.14,
//         random: function name(params) {

//         }
//     },
//     document:{
//         location:{
//             hash:
//         }
//     }
// }


// let setTimeout = window.setTimeout;

// window.setTimeout(() => {
//     console.log(`Hello`);
// }, 2000);


/* -------------------------------- BOM demo -------------------------------- */
// console.dir(window.screen);
// console.log(window.innerWidth);

/* ----------------------- Document Object Model (DOM) ---------------------- */
// console.dir(document);

// // Demo: change h1 align="left":
// console.dir(document.body.childNodes);
// document.body.childNodes[1].align = 'right';
// document.body.childNodes[1].innerText = 'Hello World';


// console.log(document);


// Retrurn BaseURI
// console.log( document.baseURI);
// document.baseURI = 'alabala';
// console.log( document.baseURI);


// Get h1 and p elements object:
// const h1 = document.body.childNodes[1];
// const p = document.body.childNodes[3];

const h1 = document.getElementById('red');
console.dir(h1);
console.dir(p);