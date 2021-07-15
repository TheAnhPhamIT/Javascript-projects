const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const playBtn = document.querySelector('#play');
const timeEl = document.querySelector('#time');
const scoreEl = document.querySelector('#score');
const message = document.querySelector('#message');
const gameContainer = document.querySelector('.game-container');

let insectSelected = {}
let time = 0;
let score = 0;

playBtn.addEventListener('click', goToChooseInsectScreen);

chooseInsectBtns.forEach(insectBtn => {
    insectBtn.addEventListener('click', () => {
        const img = insectBtn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        insectSelected = {src, alt}
        setTimeout(createInsect, 1500);
        goToGameScreen()
        controlTime();
    })
})

function goToChooseInsectScreen() {
    screens[0].classList.add('up')
}

function goToGameScreen() {
    screens[1].classList.add('up');
}

function createInsect() {
    const {x, y} = randomLocation();

    const insectEle = document.createElement('div');
    insectEle.classList.add('insect');
    insectEle.innerHTML = `<img src="${insectSelected.src}" alt="${insectSelected.alt}">`;
    insectEle.style.top = `${y}px`;
    insectEle.style.left = `${x}px`;

    insectEle.addEventListener('click', () => {
        updateScore();
        insectEle.classList.add('caught');
        setTimeout(() => insectEle.remove(), 1500);
        setTimeout(createInsect, 1000);
        setTimeout(createInsect, 1500);
    })

    gameContainer.appendChild(insectEle)
}

function randomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return {x, y}
}

function controlTime() {
    const interval = setInterval(setTime, 1000);
}

function setTime() {
    time++;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const minutePrefix = minutes < 10 ? '0' : '';
    const secondPrefix = seconds < 10 ? '0' : '';
    timeEl.innerHTML = `Time: ${minutePrefix}${minutes}:${secondPrefix}${seconds}`
}

function updateScore() {
    score++;
    scoreEl.innerHTML = `Score: ${score}`;
    if(score > 15) message.classList.add('visible')
}