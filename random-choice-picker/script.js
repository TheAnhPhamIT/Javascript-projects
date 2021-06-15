const tagsEl = document.querySelector('#tags')
const textarea = document.querySelector('#textarea');

textarea.focus();

textarea.addEventListener('keyup', e => {
    const val = e.target.value;
    
    createTags(val);

    if(e.code === 'Enter') {
        randomSelectTag();
    }
});

function randomSelectTag() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

function createTags(val) {
    const tags = filterTagsFromStr(val)

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl);
    });
}

function filterTagsFromStr(val) {
    const tags = val.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());;
    return [...new Set(tags)]
}