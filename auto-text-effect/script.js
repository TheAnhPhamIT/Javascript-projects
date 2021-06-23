const speedEl = document.querySelector('#speed');
const textEl = document.querySelector('#text');

let text = 'I love programming'
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

speedEl.addEventListener('change', () => {
    speed = 300 / speedEl.value
})

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length) {
        idx = 0;
    }

    setTimeout(writeText, speed);
}