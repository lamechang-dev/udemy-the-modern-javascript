// const pElement = document.querySelector('p');
// pElement.remove()

const ps = document.querySelectorAll("p");
ps.forEach((p) => {
    console.log(p.textContent = "This is dummy text");
})