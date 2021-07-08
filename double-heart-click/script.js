const times = document.querySelector('#times');
const loveMe = document.querySelector('.loveMe');

let clickTime = 0;
let clickCount = 0;

loveMe.addEventListener('click', e => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if(new Date().getTime() - clickTime <= 800) {
            const {x, y} = calcXY(e);
            createHeart(x, y);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime()
        }
    }
})

function calcXY(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    const offsetLeft = e.target.offsetLeft;
    const offsetTop = e.target.offsetTop;

    const xInside = clientX - offsetLeft;
    const yInside = clientY - offsetTop

    return {
        x: xInside,
        y: yInside
    }
}

function createHeart(x, y) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;

    loveMe.appendChild(heart);
    increaseClickCount()
}

function increaseClickCount() {
    clickCount++;
    times.innerHTML = clickCount;
}