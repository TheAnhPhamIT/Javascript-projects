const smallCups = document.querySelectorAll('.small-cup');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');
const liters = document.querySelector('#liters');

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if( smallCups[idx].classList.contains('full') && 
        !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.small-cup.full');
    const totalSmallCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups.length / totalSmallCups) * 330}px`;
        percentage.innerText = `${(fullCups.length / totalSmallCups) * 100}%`;
    }

    if(fullCups.length === totalSmallCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups.length / 1000)}L`
    }
}
