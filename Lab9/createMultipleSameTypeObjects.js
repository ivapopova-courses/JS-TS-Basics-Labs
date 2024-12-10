//1. By literals
// const obj1 = {
//     x:1,
//     showX:function() {
//         console.log(this.x);
//     }
// };

// const obj2 = {
//     x:2,
//     showX() {
//         console.log(this.x);
//     }
// };




// 2. By "Factory" function
// function objFactory(x) {
//     let obj = {};

//     obj.x = x;
//     obj.showX = function() {
//         console.log(this.x);
//     }

//     return obj
// }


// 3. By "Constructot" function
// function Obj(x) {
//     this.x = x;
// };
// Obj.prototype.showX = function() {
//     console.log(this.x);
// };


// const obj1 = new Obj(1);
// const obj2 = new Obj(2);

class Obj{
    constructor(x){
        this.x = x;
    }
    showX(){
        console.log(this.x);
    }
}

// const obj1 = new Obj(1);
// const obj2 = new Obj(2);


// obj1.showX()
// obj2.showX()

/* ------------------------------- Inheritance ------------------------------ */
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hi, I'm ${this.name} - ${this.age}!`);
//     }
// }

// class Teacher extends Person{

//     greet(){
//         console.log(`Hello, I'm ${this.name} - ${this.age}!`);
//     }
// };

// class Student extends Person{

// }

// const students = [
//     new Student('Ivan', 23),
//     new Student('Maria', 16)
// ];

// const teacher1 = new Teacher('Teacher1', 56);

// students[0].greet();
// students[1].greet();
// teacher1.greet()

