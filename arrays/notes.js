const notes = [
    {
        title: 'my next trip',
        body: "I'd like to go to vancouver",
        page: 2
    },
    {
        title: 'my favorite food',
        body: 'chicken',
        page: 1
    },
    {
        title: 'my favorite sweets',
        body: 'sweet potato',
        page: 3
    }
];

const alteredNotes = [
    {
        title: 'my next trip',
        body: "I'd like to go to vancouver",
        page: 2
    }
];

// const findNote = (notes, noteTitle) => {
//     const index = notes.findIndex((note) => {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return index !== -1 ? `Yay! I could find ${notes[index].title} !` : "Oops, the target note doesn't available!";
// }

// const findNote = (notes, noteTitle) => {
//     return notes.find((note) => {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
// }

// const filterNotes = (notes, noteTitle) => {
//     return notes.filter((note, index) => {
//         return note.title === noteTitle;
//     })
// }

const sortNotesByPageNum = (notes) => {
    return notes.sort((noteA, noteB) => {
        return noteA.page - noteB.page
    })
}

const sortedNotesByPageNum = sortNotesByPageNum(notes);
console.log(sortedNotesByPageNum);

// const filteredNotes = filterNotes(notes, 'my next trip');
// console.log(filteredNotes);