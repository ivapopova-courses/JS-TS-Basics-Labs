// Define 'questions' array with next data:
let questions = [
    "What is the capital of France?",
    "Which language is used for Front-end Web development?",
    "What does CSS stand for?"
];


// Define options array with next data
let options = [
    ["Berlin", "Madrid", "Paris", "Lisbon"],
    ["Python", "JavaScript", "C++", "Java"],
    ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"],
];

let answers = [
    "Paris",
    "JavaScript",
    "Cascading Style Sheets"
];


// Define output variable which will contain a next string, using the data in questions, options and answers
let output = '';

for (let i = 0; i < questions.length; i++) {
    output+=`${questions[i]} (${answers[i]})\n\t${options[i].join(',')}\n`

}


/* ---------------------------------- TEST ---------------------------------- */
console.log(output);

/* ---------------------------- EXPECTED OUTPUT: ---------------------------- */
// What is the capital of France? (Paris)
//     Berlin, Madrid, Paris, Lisbon
// Which language is used for Front-end Web development? (JavaScript)
//     Python, JavaScript, C++, Java
// What does CSS stand for? (Cascading Style Sheets)
//     Cascading Style Sheets, Creative Style System, Computer Style Sheets, Colorful Style Sheets
