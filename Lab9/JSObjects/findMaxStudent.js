/* ------- TASK: log the name and the score of student with max score ------- */
function getMaxScoreIndex(studentScores){
    // HW: implement find the index of max number in givven array
    for (let i = 0; i < studentScores.length; i++) {
        const score = studentScores[i];
    }
}

function main() {
    let studentNames  = ['Maria', 'Pesho', 'Ivan'];
    let studentScores  = [5, 6, 3];

    let maxScoreIndex = getMaxScoreIndex(studentScores)

    // log the name and the score
    console.log( `${studentNames[maxScoreIndex]} - ${studentScores[maxScoreIndex]}`);
}

main();




