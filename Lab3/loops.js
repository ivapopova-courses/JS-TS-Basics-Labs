// TASK: say 'hello' 3 times

// for(let i=1; i<=3 ;i++){
//     console.log(`hello`);
// }
// console.log(`END`);


//  let i=1 => i=1
//  1<=3    => true
//  'Hello'
//  i++    => i=2
//  2<=3   => true
//  ...
//  i++   => i=4
// 4<=3   => false
// 'End'

// Endless loop
// for( ; ; ){
//     console.log(`hello`);
// }
// console.log(`END`);

// TASK: log the numbers from 1 .. 5
// for (let i = 1; i<=5 ; i++) {
//     console.log(i);
// }


// TASK: log the numbers from 5..1
// for (let i=5; i<=1 ; i-- ) {
//     console.log(i);
// }

// for (let i=5; i>0 ; i-- ) {
//     console.log(i);
// }


// TASK: log the sum of the numbers form 1..N

// let sum = 0;
// let N = 1000;

// for (let i = 1; i<=N ; i++) {
//     sum += i;
// }
// console.log(sum);

// TASK: log the even number in [1-10] (2,4,6,8,10)
// for( let i=2; i<=10; i+=2){
//     console.log(i);
// }


// console.log( '*'.repeat(10) );



// TASK: generate random integers (0..10), while 5 is generated
let x = Math.round( Math.random()*10 );
console.log(x);