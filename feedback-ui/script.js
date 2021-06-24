const send = document.querySelector('#send');
const panel = document.querySelector('#panel');
const ratingsContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
let ratingSelected = null

ratingsContainer.addEventListener('click', e => {
    if(e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        ratingSelected = e.target.children[1].innerText;
    } else if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active')
        ratingSelected = e.target.nextElementSibling.innerHTML
    }
})

send.addEventListener('click', () => {
    if(ratingSelected) {
        panel.innerHTML = `
            <i class="fa fa-heart"></i>
            <strong>Thank You</strong>
            <br/>
            <strong>Your feedback: ${ratingSelected}</strong>
            <br />
            <p>We'll use your feedback to improve our customer support</p>
        `
    }
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}