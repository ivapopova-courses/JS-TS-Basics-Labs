// Person:
//     name:'Maria',
//     age:56,
//     children:
//         Ivan,23,
//         Ana, 15


let person = {
    name:'Maria',
    children:[
        {
            name:'ivan',
            age:23,
            children:[]
        },
        {
            name:'Ana',
            age:15,
            children:[]
        },
    ],
    age:56,
    changeChildName:function(childIndex, newName) {
        this.children[childIndex].name = newName;
    }
};

console.dir(person);
// person.children[0].name = 'Ivan';
person.changeChildName(0, 'Ivan');
console.dir(person);




