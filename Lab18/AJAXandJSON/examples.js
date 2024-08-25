const apiURL = 'https://api.chucknorris.io/jokes/random';

fetch(apiURL)
.then( r=>r.json())
.then( dataObj=>{
    console.log(dataObj.value);
})


console.log(`END`);