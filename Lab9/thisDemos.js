/* ------------------------------ about 'this' ------------------------------ */
const showX = function() {
    console.log(this.x);
}

let obj1 = {
    x:1,
    showX:showX
};
let obj2 = {
    x:2,
    showX:showX
}
let obj3 = {
    x:3,
    showX: function() {
        console.log(this);
        console.log(this.x);
    },
    bar: ()=>{
        console.log(this);
    }
}



// let foo = obj3.showX;
// foo();
// obj3.showX();
// obj3.bar();

