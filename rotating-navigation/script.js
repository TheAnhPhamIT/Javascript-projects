const closeBtn = document.querySelector('.btn-close');
const openBtn = document.querySelector('.btn-open');
const container = document.querySelector('.container');

closeBtn.addEventListener('click', () => container.classList.remove('show-nav'));

openBtn.addEventListener('click', () => container.classList.add('show-nav'));