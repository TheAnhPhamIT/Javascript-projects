const navBtn = document.querySelector('.nav-btn');
const sidebarEle = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.search-btn');

navBtn.addEventListener('click', () => {
  sidebarEle.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
  sidebarEle.classList.toggle('active');
});
