/* ------------------------------- Comparison ------------------------------- */
// console.log( 2<=2 ); // true
// console.log( 2<2 );  // false

// console.log( '2'==2 );
// console.log( '2'===2 );

// console.log( '3'!=3 );  // false
// console.log( '3'!==3 ); // true

// console.log( true==1 );
// console.log( false==0 );
// console.log( false===0 );

// console.log( '2'>'1999'); // true
// console.log( 50>49 ); // true


// console.log( '2'>'2999'); //false
// console.log( ''>'9');//false
// console.log( -1>57 );//false

// console.log( !false );
// console.log( !2 );//false
// console.log( (!2)+3 );
// console.log( !2+3 );
// console.log( !(2+3) );//false



/* --------------------------- Logical Operations --------------------------- */
// console.log( true && false );// false
// console.log( true || false );// true

// console.log( 4>2 && 2!=2 ); //false
// console.log( true && false ); //false

// console.log( 0 && 2); //0
// console.log( 3 || 0); //3
// console.log( 3 || 1); //3

// console.log( 2-2 && 23*123 ); //0

// 2-2 || console.log(`Hi`);

// let x;
// console.log( x && 'hi' ); //undefined



// let x = 43;

// ако е вярно че x е четно , то изпиши в конзолата 'X e четно!':

// x%2===0 && console.log(`X e четно!`);
// console.log( true && 2-98);


// // задаване на стойност по подразбиране:
// let userName;
// userName = userName || 'Anonymous';

// console.log(`Hello, ${userName}`)

/* ------------------------- Conditional Statements ------------------------- */
// // TASK: say 'Welcome' if the user is adult
// let age = 21;
// if(age>=18){
//     console.log(`Welcome`);
// }

// console.log(`END`);


// TASK: say 'Even' if x is even
// let x = 22;

// if(x%2===0){
//     console.log(`Even`);
// }

// if( !(x%2) ){
//     console.log(`Even`);
// }


// TASK: say 'Even' if x is even, say 'Odd' if x is odd
// let x = 6;

// if(x%2===0){
//     console.log(`Even`);
// }else{
//     console.log(`Odd`);
// }

// console.log(`END`);


// TASK: say 'Even' if x is even, say 'Odd' if x is odd, say 'Zero' if x is 0
let x = 1;
// if(x===0){
//     console.log(`Zero`);
// }else{
//     if(x%2===0){
//         console.log(`Even`);
//     }else{
//         console.log(`Odd`);
//     }
// }

// if(x===0){
//     console.log(`Zero`);
// }else if(x%2===0){
//     console.log(`Even`);
// }else{
//     console.log(`Odd`);
// }


/* --------------------------- Ternary Operatorion -------------------------- */
// let age = 12;

// let stat;
// if( age >= 18 ){
//     stat = "adult";
// }else{
//     stat = "child"
// }

// let stat = age>=18?'adult':'child';

// console.log(`stat = ${stat}`);

/* ------------------------------- Switch-case ------------------------------ */
// let fruit = 'ale';

// if(fruit==='banana'){
//     console.log(`yellow`);
// }else if(fruit==='apple'){
//     console.log(`red`);
// }else{
//     console.log(`I don't know`);
// }

// switch (fruit) {
//     case 'banana':
//         console.log(`yellow`);
//         break;
//     case 'apple':
//         console.log(`red`);
//         break;
//     default:
//         console.log(`I don't know`);
// }