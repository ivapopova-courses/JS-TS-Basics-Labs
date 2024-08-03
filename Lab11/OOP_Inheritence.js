// Person Constructor
class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

// Student Constructor
class Student extends Person{
    constructor(name, score, teacher) {
        super(name);
        this.score = score;
        this.teacher = teacher;
    }
}

// Teacher Constructor
class Teacher extends Person{
    constructor(name) {
        super(name)
    }
}


const teacher1 = new Teacher('Teacher1');
const student1 = new Student('Ada', 4, teacher1);


console.dir(student1);


