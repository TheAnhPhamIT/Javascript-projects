const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const imgsContainer = document.querySelector('#imgs');
const imgs = document.querySelectorAll('#imgs img');
const runTime = 3000

let currIdx = 0;

let interval = setInterval(run, runTime);

nextBtn.addEventListener('click', () => {
    currIdx++;
    changeImage();
    resetInterval();
})

prevBtn.addEventListener('click', () => {
    currIdx--;
    changeImage();
    resetInterval();
})

function run() {
    currIdx++;
    changeImage();
}

function changeImage() {
    if(currIdx > imgs.length - 1) {
        currIdx = 0;
    } else if(currIdx < 0) {
        currIdx = imgs.length - 1;
    }
    imgsContainer.style.transform = `translateX(${-currIdx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, runTime);
}