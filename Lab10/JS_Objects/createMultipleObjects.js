// const student1 = {
//     'name':'Maria',
//     'score':5,
//     'greet':function() {
//         console.log(`${this.name}-${this.score}`);
//     }
// };

// const student2 = {
//     'name':'Pesho',
//     'Score':6,
//     'greet':function() {
//         console.log(`${this.name}-${this.score}`);
//     }
// };


// // Create objects with "Factory" function:
// function studentFactory(name, score) {
//     let obj = {};
//     obj.name = name;
//     obj.score = score;
//     obj.greet = function() {
//         console.log(`${this.name}-${this.score}`);
//     };
//     return obj;

//     // return {
//     //     'name': name,
//     //     'score':score,
//     //     'greet':function() {
//     //         console.log(`${this.name}-${this.score}`);
//     //     }
//     // }
// }

// const student1 = studentFactory('Maria', 5);
// const student2 = studentFactory('Pesho', 6);


// student1.greet();
// student2.greet();


// Create objects with "Constructor" function:

// function Student(name, score) {
//     // let this = {};
//     // console.log( this );
//     this.name = name;
//     this.score = score;
//     // return this;
// }
// Student.prototype.greet = function() {
//     console.log(`${this.name}-${this.score}`);
// };

// const student1  = new Student('Maria', 5);
// const student2  = new Student('Pesho', 6);


// student1.greet();
// student2.greet();


// Create objects with "Class" syntex:
class Student{
    constructor(name, score) {
        this.name = name;
        this.score = score;
    };
    greet(){
        console.log(`${this.name}-${this.score}`);
    }
}

const student1  = new Student('Maria', 5);
const student2  = new Student('Pesho', 6);


student1.greet();
student2.greet();


console.log( student1 );





