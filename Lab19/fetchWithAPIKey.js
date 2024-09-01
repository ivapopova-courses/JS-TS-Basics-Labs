// Your API key is: 155713506496409081606385cc46451f

// https://newsapi.org/v2/everything?
// q=tesla
// from=2024-08-01
// sortBy=publishedAt
// apiKey=155713506496409081606385cc46451f


// function fetchTeslaNews(url) {
//     fetch(url)
//     .then(r=>r.json())
//     .then(data=>{
//         const articles = data.articles;
//         articles.forEach(article => {
//             console.log(article.title);
//         });
//     })
//     .catch(err=>console.log(`Error: ${error}`))
// }

async function fetchTeslaNews(url) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        const articles = data.articles;
        articles.forEach(article => {
            console.log(article.title);
        });
    }catch(err){
        console.log(`Error: ${err}`);
    }
}



fetchTeslaNews('https://newsapi.org/v2/everything?q=tesla&from=2024-08-01&sortBy=publishedAt&apiKey=155713506496409081606385cc46451f')



// https://newsapi.org/v2/everything?q=bitcoin&apiKey=155713506496409081606385cc46451f