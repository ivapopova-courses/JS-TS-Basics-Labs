// Generate machine number
let machineNumber = Math.round(Math.random()*10);
// console.log(`machineNumber: ${machineNumber}`);

let userNumber;

// Get DOM elements:
let numberInput = document.querySelector('#inputNumber');
let guessButton = document.querySelector('#guessButton');
let output = document.querySelector('.output');


// On Guess button click do:
guessButton.addEventListener('click', function(e) {
    // Get user number:
    userNumber = numberInput.value;
    console.log(`userNumber: ${userNumber}`);

    // Compare user guess to machine Number:
    if(machineNumber>userNumber){
        output.innerText += `${userNumber}-> too low!\n`;
    }else if(machineNumber<userNumber){
        output.innerText += `${userNumber}-> too hight!\n`;
    }else{
        output.innerText += `Bravo!!! ${userNumber} is my number!\n`;
    }
})



