const jokeText = document.querySelector('.joke');
const jokeForm = document.querySelector('.jokeForm');
const fireImg = document.querySelector('.fire');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

async function getData() {
    const url = `https://api.icndb.com/jokes/random`;
    const res = await fetch(url);
    const data = await res.json();
    jokeText.innerHTML = data.value.joke;
}
getData();

jokeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstName = firstNameInput.value || 'Chuck';
    const lastName = firstNameInput.value || 'Norris';
    const urlname = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    const res = await fetch(urlname);
    const data = await res.json();
    jokeText.innerHTML = data.value.joke;
    fireImg.classList.add('on');
})