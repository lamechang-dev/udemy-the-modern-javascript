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

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => {
    if (paragraph.textContent.toLowerCase().includes("the")) {
        paragraph.remove();
    }
})