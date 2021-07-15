const passwordInput = document.querySelector('#password');
const background = document.querySelector('#background');

passwordInput.addEventListener('input', e => {
    const val = e.target.value;
    const valLen = val.length;
    const blur = 20 - (valLen * 2);
    background.style.filter = `blur(${blur}px)`;
})