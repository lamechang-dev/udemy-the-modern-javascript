const notes = [
    'note 1',
    'note 2',
    'note 3'
]

console.log(notes);
console.log(notes.length);
console.log(notes[notes.length - 1]);

// const todos = [
//     'wash your hands',
//     'take the shower',
//     'watch TV',
// ];

// console.log(`Last Todo: ${todos[todos.length - 1]}`);

// todos.push('my new note');

// console.log(todos);

// lastItem = todos.pop();
// console.log(lastItem);
// console.log(todos);


const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];

for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`);
}