// let x = 1;
// let y = '1';
// let arr = [1];
// let foo = function(){};
// function bar(){};


// console.dir(x);
// console.dir(y);
// console.dir(arr);
// console.dir(foo);
// console.dir(bar);

// console.dir(`*`.repeat(30));
// console.dir( 1 );
// console.dir( function(){} );
// console.dir( [1] );

/* --------------------------- Functions in array --------------------------- */
// let arr = [
//     1+1,
//     'aba',
//     [2,3],
//     function(){
//         console.log(`Anonymous`);
//     },
//     function(x,y) {
//         return x+y
//     }
// ]


// console.log( arr[2][0] ); //2
// arr[3]() //'Anonymous;
// console.log( arr[4](2,3) )


/* --------------------------- Callback functions --------------------------- */
// let x = 1;
// let y = x;

// function foo() {
//     console.log(`Foo`);
// }

// let bar = foo;

// foo();
// bar();



// 'Foo'



// function foo( f ) {
//     // let f = bar
//     console.log( f() );

// }

// function bar() {
//     console.log(`Bar`);
// }

// foo( bar );

function calc(f,x,y) {
    console.log( f(x,y) ); // add(2,3) = 5
}

// function add(x,y) {
//     return x+y
// }

// function div(x,y) {
//     return x/y
// }


// calc( add, 2,3 ); //5
// calc( div, 2,3 ); //0.66666666666666


// calc( function(x,y) {
//     return x+y
// }, 2,3);

/* -------------------------------- Example 2 ------------------------------- */
function foo(f) {
    f();
}


foo( function() {
    console.log(`Test`);
})