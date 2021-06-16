const body = document.body;
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const slides = document.querySelectorAll('.slide');

let activeSlide = 0;

setActiveSlide();

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

leftBtn.addEventListener('click', () => {
    activeSlide--;
    if(activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setActiveSlide();
});

rightBtn.addEventListener('click', () => {
    activeSlide++;
    if(activeSlide >= slides.length) {
        activeSlide = 0;
    }

    setActiveSlide();
})