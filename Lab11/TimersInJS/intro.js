// Task: say Hello after 5 seconds
// With function declaration
setTimeout( function (){
    console.log(`Hello`)
}, 5000);

// With arrow syntax
setTimeout( ()=>{console.log(`Hello`)}, 5000);


// function setTimeout(f, timeout) {
//     wait(timeout);
//     f();
// }