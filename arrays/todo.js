const todos = [
    {
        name: 'do homework',
        completed: false
    },
    {
        name: 'trash garbage',
        completed: false
    },
    {
        name: 'feed the cat',
        completed: true
    },
]

let deleteTodo = (todos, todoName) => {
    const targetIndex = todos.findIndex((todo) => {
        return todo.name.toLowerCase() === todoName.toLowerCase();
    })
    if (targetIndex !== -1) {
        todos.splice(targetIndex, 1);
    }
}

deleteTodo(todos, 'trash garbage');
console.log(todos);

// test add 