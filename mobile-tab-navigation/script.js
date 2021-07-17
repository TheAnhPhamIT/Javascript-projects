const contents = document.querySelectorAll('.content');
const liItems = document.querySelectorAll('nav ul li');

liItems.forEach((li, idx) => {
    li.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        li.classList.add('active');
        contents[idx].classList.add('show');
    })
})

function hideAllContents() {
    contents.forEach(content => {
        content.classList.remove('show')
    })
}

function hideAllItems() {
    liItems.forEach(item => {
        item.classList.remove('active')
    })
}