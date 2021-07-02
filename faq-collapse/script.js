class FAQ {
    constructor(title = '', content = '') {
        this.title = title;
        this.content = content;
    } 
}

const faqs = [
    new FAQ('How many cats in the box?', 'I saw the box at my school'),
    new FAQ('How many cats in the box?', 'I saw the box at my school'),
    new FAQ('How many cats in the box?', 'I saw the box at my school'),
    new FAQ('How many cats in the box?', 'I saw the box at my school'),
    new FAQ('How many cats in the box?', 'I saw the box at my school'),
]

initFAQs();

function initFAQs() {
    const faqContainer = document.querySelector('.faq-container');
    faqContainer.innerHTML = '';
    faqs.forEach(faq => {
        const faqEle = createFAQEle(faq);
        faqContainer.appendChild(faqEle)
    })
}

function createFAQEle(faq) {
    const faqEle = document.createElement('div');
    faqEle.classList.add('faq');
    faqEle.innerHTML = `
        <div class="faq-title">${faq.title}</div>
        <div class="faq-content">${faq.content}</div>
        <button class="faq-collapse">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
        </button>
    `
    return faqEle;
}

const collapsesBtn = document.querySelectorAll('.faq .faq-collapse');

collapsesBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active');
    })
})