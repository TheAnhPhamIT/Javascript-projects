const container = document.getElementById('container');
const colors = ['#fc5c65', '#eb3b5a', '#fa8231', '#fed330', '#26de81', '#2bcbba', '#2d98da', '#a55eea'];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => addColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}

function addColor(element) {
    const color = randomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}