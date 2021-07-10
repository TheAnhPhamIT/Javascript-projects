const jokeEle = document.querySelector('.container > .joke');
const getJokeBtn = document.querySelector('.container > .btn');

generateJoke();

getJokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json();

    const { joke } = data;

    jokeEle.innerHTML = joke;
}