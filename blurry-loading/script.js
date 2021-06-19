const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;

let interval = setInterval(() => blurring(), 30)

function blurring() {
    load++;
    if(load > 99) {
        clearInterval(interval)
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1 ,0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/**
 * https://stackoverflow.com/questions/5731863/mapping-a-numeric-range-onto-another/5732390#5732390
 * @param {*} num 
 * @param {*} inStart 
 * @param {*} inEnd 
 * @param {*} outStart 
 * @param {*} outEnd 
 */
function scale(num, inStart, inEnd, outStart, outEnd) {
    return outStart + ((num - inStart) * (outEnd - outStart)) / (inEnd - inStart)
}