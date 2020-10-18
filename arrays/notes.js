const notes = [
    {},
    {
        title: 'my next trip',
        body: "I'd like to go to vancouver"
    },
    {
        title: 'my favorite food',
        body: 'chicken'
    },
    {
        title: 'my favorite sweets',
        body: 'sweet potato'
    }
];

const index = notes.findIndex((note, index) => {
    return note.title === 'my favorite sweets';
})

console.log(index);