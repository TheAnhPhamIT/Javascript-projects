const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialText = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const userRole = document.querySelector('.role');

class Testimonial {
    constructor(testimonial, photo, username, position) {
        this.testimonial = testimonial;
        this.photo = photo;
        this.username = username;
        this.position = position
    }
}

const testimonials = [
    new Testimonial(
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nisi tenetur tempora iure perspiciatis debitis, corrupti unde, blanditiis veniam eum est! Natus doloremque provident, cupiditate temporibus numquam et expedita unde.',
        'https://randomuser.me/api/portraits/men/46.jpg',
        'John',
        'Marketing'
    ),
    new Testimonial(
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nisi tenetur tempora iure perspiciatis debitis, corrupti unde, blanditiis veniam eum est! Natus doloremque provident.',
        'https://randomuser.me/api/portraits/women/46.jpg',
        'Kathy',
        'Human resource'
    ),
    new Testimonial(
        'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
        'https://randomuser.me/api/portraits/men/45.jpg',
        'Tom',
        'IT'
    )
]

let currIdx = 0;

changeTestimonialContent();

setInterval(changeTestimonialContent, 10000)

function changeTestimonialContent() {
    testimonialText.innerHTML = testimonials[currIdx].testimonial;
    userImage.src = testimonials[currIdx].photo;
    userName.innerHTML = testimonials[currIdx].username;
    userRole.innerHTML = testimonials[currIdx].position;

    currIdx++;

    if(currIdx > testimonials.length - 1) {
        currIdx = 0
    }
}