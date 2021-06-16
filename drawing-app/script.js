const canvas = document.querySelector('#canvas');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const sizeEle = document.querySelector('#size');
const colorEle = document.querySelector('#color');
const clearBtn = document.querySelector('#clear');

const ctx = canvas.getContext('2d');

let size = 1;
let color = 'black';
let x;
let y;
let isPressed = false;

increaseBtn.addEventListener('click', () => {
    size++;
    if(size > 50) size = 50;
    updateSizeEle();
})

decreaseBtn.addEventListener('click', () => {
    size--;
    if(size < 1) size = 1;
    updateSizeEle();
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, 600, 500)
})

colorEle.addEventListener('change', e => {
    color = e.target.value;
})

function updateSizeEle() {
    sizeEle.innerHTML = size;
}

canvas.addEventListener('mousedown', e => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', e => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', e => {
    if(isPressed) {
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        drawCircle(x, y);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}