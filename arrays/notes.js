const notes = [
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

// const findNote = (notes, noteTitle) => {
//     const index = notes.findIndex((note) => {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return index !== -1 ? `Yay! I could find ${notes[index].title} !` : "Oops, the target note doesn't available!";
// }

const findNote = (notes, noteTitle) => {
    return notes.find((note) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}

console.log(findNote(notes, 'my favorite sweets'))