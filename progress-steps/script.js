const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currActive = 1;

prev.addEventListener('click', () => {
    currActive--;
    if(currActive < 1) {
        currActive = 1
    }

    update();
})

next.addEventListener('click', () => {
    currActive++;
    if(currActive > circles.length) {
        currActive = circles.length;
    }

    update();
})

function update() {
    circles.forEach((circle,idx) => {
        if(idx < currActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.circle.active');
    if(actives.length <= 1) {
        prev.disabled = true;
    } else if(actives.length >= circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
}