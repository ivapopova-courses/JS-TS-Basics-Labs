// global scope
function bar() {
    // local scope for bar
    function foo() {
        // local scope for foo
        console.log(`2`);
    }
}
console.log(`1`);

for (let i = 0; i < 3; i++) {
    // block scope
    const element = array[i];

}