function getUserNumber(numberInput){
    // Get user number:
    userNumber = numberInput.value;
    console.log(`userNumber: ${userNumber}`);
}

function generateMachineNumber(){

}

function onGuessButtonClick(numberInput, machineNumber, output) {
    return function() {
        let userNumber = getUserNumber(numberInput);

        // Compare user guess to machine Number:
        if(machineNumber>userNumber){
            output.innerText += `${userNumber}-> too low!\n`;
        }else if(machineNumber<userNumber){
            output.innerText += `${userNumber}-> too hight!\n`;
        }else{
            output.innerText += `Bravo!!! ${userNumber} is my number!\n`;
        }
    }
}


function main() {
    let machineNumber = generateMachineNumber();

    // Define DOM elements:
    let numberInput = document.querySelector('#inputNumber');
    let guessButton = document.querySelector('#guessButton');
    let output = document.querySelector('.output');

    guessButton.addEventListener('click', onGuessButtonClick(numberInput, machineNumber, output) );
}

main();

