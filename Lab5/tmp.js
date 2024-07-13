let userNumber;
let output = '';
for(let i=0; i<5; i++){
    userNumber = Math.round(Math.random()*10)
    output += `Bravo!!! ${userNumber} is my number!\n`;
}

console.log(output);
