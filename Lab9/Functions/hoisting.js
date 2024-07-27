// var x;
// console.log(x);


// console.log(y);
// var y=1;


// RAM:
//     x:x123:undefined
//     y:x124:undefined



foo(1);
bar(1);


function foo(x) {
    console.log(`x in foo: ${x}`);
};

var bar = function(x) {
    console.log(`x in bar: ${x}`);
};



// RAM:
//     foo:0x123:0101010100101 [function foo]
//     *bar:0x234: undefind
