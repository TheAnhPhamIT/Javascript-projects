const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sliderContainer = document.querySelector('.slider-container');
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;
leftSlide.style.transform = `translateY(-${(slidesLength - 1)*100}vh)`

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }

    if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    // const sliderHeight = sliderContainer.clientHeight;
    // rightSlide.style.transform = `translateY(-${sliderHeight * activeSlideIndex}px)`;
    // leftSlide.style.transform = `translateY(${(sliderHeight * activeSlideIndex) - (sliderHeight * (slidesLength - 1))}px)`;

    rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
    leftSlide.style.transform = `translateY(${(activeSlideIndex * 100) - ((slidesLength - 1) * 100)}vh)`
}