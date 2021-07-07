const range = document.querySelector('.range');
const rangeLabel = document.querySelector('.range-container label');

range.addEventListener('input', e => {
    const value = e.target.value;
    const max = e.target.max;
    const min = e.target.min;

    const rangeWidth = e.target.offsetWidth;
    const rangeLabelWidth = rangeLabel.offsetWidth;

    const left = `${(value / max * rangeWidth) - rangeLabelWidth / 2}px`
    rangeLabel.style.left = left
    rangeLabel.innerHTML = value;
})