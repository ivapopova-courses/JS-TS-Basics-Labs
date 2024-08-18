/* ----------------------------- Spread Operator ---------------------------- */
// In function call
// function greet(name, age) {
//     console.log(`Hello, ${name}, you are ${age} years old!`);
// };

// const userDetails = ['Ivan', 23];

// // greet(userDetails[0],userDetails[1]) // before ES6
// greet(...userDetails)

// In array literal

// let userDetails = ['Ivan', 23];
// const userFriends = ['Maria', 'Pesho'];

// // userDetails.push(userFriends[0], userFriends[1])
// userDetails = [...userDetails, ...userFriends]
// console.log(userDetails);


/* ------------------------------ Rest Operator ----------------------------- */
// function foo(...x, a) {
//     console.log(`x=`, x);
//     console.log(arguments)
// }


// foo('Ivan')
// foo('Ivan', 23)


/* ------------------------ Destructuring Assignment ------------------------ */
// let x=1, y = 2;
// let [x,y] = [1,2];

// console.log(x);
// console.log(y);


// const userDetails = ['Ivan', 23];

// // const userName = userDetails[0];
// // const userAge = userDetails[1];

// const [userName, userAge] = userDetails;

// console.log(userName);
// console.log(userAge);

// Use Case: swap values of 2 variables
// let x = 1;
// let y = 2;

// // let tmp = x;
// // x = y;
// // y = tmp;
// [x,y] = [y,x];


// console.log(x); // 2
// console.log(y); // 1

// // Use case for destructuring object
// let obj = {'a':1,'b':2,'c':3};
// let b;

// ({b, ...obj} = obj);

// // remove 'b' prop
// console.log(obj);// {'a':1,'c':3};


/* ----------------------- Object Literal new features ---------------------- */
// const userName = 'Ada';
// const userAge = 23;


// const userData = {
//     userName,
//     userAge,
//     greet(){
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };


// // class User{
// //     greet(){
// //         console.log(`Hi, I'm ${this.name}`);
// //     }
// // }



let numbers = [1,2,3,4,5];
let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum+=element
// }

for (let element of numbers){
    sum+=element
}

console.log(`sum = ${sum}`);