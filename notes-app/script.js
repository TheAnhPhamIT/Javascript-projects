const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', () => addNote());

const notes = JSON.parse(localStorage.getItem('notes'));


if(notes) {
    notes.forEach(note => {
        addNote(note)
    })
}

function addNote(text = '') {
    const noteEle = document.createElement('div');
    noteEle.classList.add('note');
    noteEle.innerHTML = `
    <div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>`;

    const editBtn = noteEle.querySelector('.edit');
    const trashBtn = noteEle.querySelector('.delete');
    const textArea = noteEle.querySelector('textarea');
    const mainEle = noteEle.querySelector('.main');

    textArea.value = text;
    mainEle.innerHTML = marked(text);

    trashBtn.addEventListener('click', () => {
        noteEle.remove();

        updateLS();
    });
    editBtn.addEventListener('click', () => {
        textArea.classList.toggle('hidden');
        mainEle.classList.toggle('hidden');
    })
    textArea.addEventListener('change', e => {
        const {value} = e.target;

        mainEle.innerHTML = marked(value);

        updateLS()
    })
    document.body.appendChild(noteEle)
}

function updateLS() {
    const textAreas = document.querySelectorAll('textarea');
    let notes = [];

    textAreas.forEach(textarea => {
        notes.push(textarea.value)
    })

    localStorage.setItem('notes', JSON.stringify(notes))
}