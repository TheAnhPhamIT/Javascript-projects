const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

openBtn.addEventListener('click', openNavBar);
closeBtn.addEventListener('click', closeNavBar);

function openNavBar() {
    navs.forEach(nav => nav.classList.add('visible'))
}

function closeNavBar() {
    navs.forEach(nav => nav.classList.remove('visible'))
}