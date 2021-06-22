const nav = document.querySelector('.nav');

document.addEventListener('scroll', fixNav);

function fixNav() {
    if(document.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}