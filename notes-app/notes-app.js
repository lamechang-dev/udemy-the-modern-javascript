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

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from JavaScript';

// appendChild(): add the new thing as the last item inside of DOM Element
// methid chain
document.querySelector('body').appendChild(newParagraph);