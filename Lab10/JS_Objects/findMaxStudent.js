/* ------- TASK: log the name and the score of student with max score ------- */
function getMaxScoreStudent(students) {
    let maxStudent = students[0];
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if(student.score>maxStudent.score){
            maxStudent = student
        }
    }
    return maxStudent;
}

function Student(name, score) {
    this.name = name;
    this.score = score;
    this.greet = function() {
        console.log(`${this.name}-${this.score}`);
    };
}

function main() {
    let students = [
        new Student('Maria', 5),
        new Student('Pesho', 6),
        new Student('Ivan', 3),
    ];

    let maxStudent = getMaxScoreStudent(students);
    maxStudent.greet();
}

main();




