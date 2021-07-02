let nums = document.querySelectorAll('.nums span');
const replayBtn = document.querySelector('.replay');
const finalEle = document.querySelector('.final');
const counterEle = document.querySelector('.counter');
const numsEle = document.querySelector('.nums')

const COUNTDOWN_NUM = 5;

initNums();
runAnimation();

replayBtn.addEventListener('click', () => {
    resetDOM();
    runAnimation();
})

function initNums() {
    for(let i = COUNTDOWN_NUM - 1; i >= 0; i--) {
        const numEle = document.createElement('span');
        numEle.innerText = i;
        numsEle.appendChild(numEle)
    }

    nums = document.querySelectorAll('.nums span');
    nums[0].classList.add('in')
}

function resetDOM() {
    nums.forEach(num => {
        num.classList.value = '';
    })

    finalEle.classList.remove('show');
    counterEle.classList.remove('hide');

    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1;
        num.addEventListener('animationend', e => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in');
                num.classList.add('out')
            } else if(e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            } else {
                counterEle.classList.add('hide');
                finalEle.classList.add('show');
            }
        })
    })
}