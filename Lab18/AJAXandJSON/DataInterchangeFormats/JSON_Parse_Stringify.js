/* ----------------------------- JSON stringify ----------------------------- */
// let todos = {
// 	todos: [
// 		{
// 			"title": 'Learn HTML',
// 			"completed": true,
// 			"id": 1,
// 		},
// 		{
// 			"title": "Learn CSS",
// 			"completed": true,
// 			"id": 2
// 		},
// 		{
// 			"title": "Learn JS",
// 			"completed": true,
// 			"id": 3
// 		}
// 	]
// };


// let todosStr = JSON.stringify(todos);

// console.log(todos);
// console.log(todosStr);


/* ------------------------------- JSON parse ------------------------------- */

const todosStr = `[{"title":"Learn HTML","completed":true,"id":1},{"title":"Learn CSS","completed":true,"id":2},{"title":"Learn JS","completed":true,"id":3}]`;

const todos = JSON.parse(todosStr)

for (const todo of todos) {
    console.log(todo.title);
}






