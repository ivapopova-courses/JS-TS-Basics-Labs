/* ----------------------------- Sync execution ----------------------------- */
console.log(1);
alert('Hello');
console.log(2);


/* ----------------------------- Async execution ----------------------------- */
console.log(1);

setTimeout( function() {
    console.log(`Hello`);
}, 5000);

console.log(2);