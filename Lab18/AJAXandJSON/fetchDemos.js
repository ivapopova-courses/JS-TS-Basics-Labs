console.log(1);

// Async (Non-blocking) poerations
fetch('http://127.0.0.1:8080/index.html')
.then( r=>r.text() )
.then( data=>console.log(data) )
.catch( ()=>console.log(`Error`));



console.log(2);



