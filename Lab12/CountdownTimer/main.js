function startCountdown(initialTime) {

    const timerIntervalID = setInterval(() => {
        initialTime--;
        if(initialTime===0){
            clearInterval(timerIntervalID);
        }
        timerContainer.innerHTML = initialTime;
    }, 1000);


}

// Get DOM nodes
const timeInput = document.querySelector('#time-input');
const btnStartTimer = document.querySelector('#start-timer');
const timerContainer = document.querySelector('#timer-container');


btnStartTimer.addEventListener('click', ()=>{
    let initialTime = timeInput.value;
    timerContainer.innerHTML = initialTime;
    startCountdown(initialTime);
})