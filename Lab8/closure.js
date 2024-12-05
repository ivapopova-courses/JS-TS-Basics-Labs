function outer(x){
    console.log(`Outer is called!`);

    return function(){
        console.log(`Inner is called with x: ${x}!`);
        return x*2;
    };
}

const inner = outer(2);

// cloure do:
// const inner = function(){
//     console.log(`Inner is called!`);
//     return 2*2;
// };

inner();
