
// const arr = [1,2,3];
// console.log(typeof arr);
// console.log( arr.length );
// arr.id = 'id1';
// console.log(arr);



// let str = 'abc';
// console.log(typeof str);
// console.log( str.length );// wrapping/boxing
// str.id = 'id1';
// console.log(str);


// let str = 'abc';
// let strObj = new String('abc');

// console.log(str);
// console.log(strObj);
// let replacedStr = strObj.replace('ab', '@');
// console.log(strObj);
// console.log(replacedStr);

// let str = 'abc';
// // let strObj = new String(str);
// console.log( str.toUpperCase());
// console.log( (new String(str)).toUpperCase());

let str = 'abc';
str.id = 'id1'; // (new String(str).id)
console.log(str.id);//undefined


// RAM:
//     str:0x123: 'abc';
//     anon1:0x345: [Object 'abc']
//     anon1.id:0x321:'id1'
//     anon2:0x345: [Object 'abc']