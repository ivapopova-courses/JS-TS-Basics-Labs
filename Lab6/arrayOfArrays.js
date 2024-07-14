// let arr = [ 1, '1', [1]];
// console.log(arr.length);

// let m = [
//     [1,2,3],
//     [4,5,6]
// ];

// console.log(m.length);
// console.log( m[0] );
// // let x = m[0];
// // console.log( x[1] ); // 2

// console.log( m[0][1] ); // 2


// console.log(m);// [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// m[1][2] = 9;
// console.log(m);// [ [ 1, 2, 3 ], [ 4, 5, 9 ] ]



// let userNames = ['Maria', 'Pesho', 'Asen'];
// let userScores = [4, 2, 5];

let userData = [
    ['Maria', 'Pesho', 'Asen'],
    [4, 2, 5]
]

// console.log(`${userData[0][1]} - ${userData[1][1]}`);

for (let i = 0; i < userData.length; i++) {
    const arr = userData[i];
    for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        console.log(element);
    }
}