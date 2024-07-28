// пример за масив, съхраняващ информация за 1 студент:
// let studentArr = [
//     "Pesho",
//     "Petrov",
//     function() {
//         console.log(`Hello, I'm ${this.firstName}`);
//     }
// ];

// // пример за обект, съхраняващ информация за 1 студент:
// let student1 = {
//     // properties:
//     "firstName" : "Pesho",


//     // methods
//     "greet": function() {
//         console.log(`Hello, I'm ${student1.firstName}`);
//     },

//     "surName" : "Petrov",
// };

// console.log( studentArr );
// console.log( student1 );

// let dictionary = {
//     // съвкупност от 'key':'value' двойки
//     'apple': 'ябълка',
//     'banana': 'банан',
//     'orange': 'портокал'
// };


// console.log( dictionary.banana );

// let developer1 = {
//     'firstName': 'ivan',
//     'skills': ['HTML', 'CSS', 'JS'],
//     'surName': 'Ivanov',
//     'applyForJob':function() {
//         console.log(`Apply for job`);
//     }
// }

// console.log( developer1.firstName );
// console.log( developer1.skills[1] );
// developer1.applyForJob()

// developer1.firstName = 'Ivan';
// console.log( developer1 );

// console.log( developer1.name );

// let student1 = {};
// student1.name = 'Ivan';
// student1.score = 5;

// console.log( student1 );


// let student1 = {
//     'name':'Maria',
//     'score':5
// };

// let propName = 'name';

// console.log( student1.name );
// console.log( student1['name'] );

// console.log( student1[propName] );
// console.log( student1.propName );



// let arr1 = [1,2,3];
// arr1.length


// let obj = {
//     0:1,
//     1:2,
//     2:3,
//     'length':3
// };

// arr1.length = 0;
// obj.length = 0;


// console.log( arr1 );
// console.log( obj );

// console.log(Math);

// console.log( Math.PI );
// console.log( Math.random() );


// console.log( document );



// let developer1 = {
//     'firstName': 'ivan',
//     'skills': ['HTML', 'CSS', 'JS'],
//     'surName': 'Ivanov',
//     'applyForJob':function() {
//         console.log(`Apply for job`);
//     },
//     'address': {
//         'country':'Bulgaria',
//         'town':'Sofia',
//         'zip':1504
//     }
// };

// console.log( developer1.address.country );


let student1 = {
    'name':'Maria',
    'score':5,
    'greet':function() {
        console.log(`${this.name}-${this.score}`);
    }
};


let student2 = {
    'name':'Pesho',
    'score':3,
    'greet':function() {
        console.log(`${this.name}-${this.score}`);
    }
};

student1.greet();
student2.greet();
