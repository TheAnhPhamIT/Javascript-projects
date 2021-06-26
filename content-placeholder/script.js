const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profileImg = document.querySelector('#profile_img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-texts')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="">`;
    title.innerText = `Lorem ipsum dolor sit amet`;
    excerpt.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, temporibus.`;
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
    name.innerText = `Tom`;
    date.innerText = `Oct 08, 2020`;

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-texts'))
}