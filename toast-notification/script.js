const toasts = document.querySelector('.toasts');
const showToastBtn = document.querySelector('#show-toast');

const MESSAGE_TIMEOUT = 4000;

const messages = [
    'Does she like to read books?',
    'Think outside the box',
    'Nothing is impossible, the word itself says "Im possible"',
    'He likes to play basketball'
]

const MESSAGE_TYPE = ['info', 'success', 'warning', 'error'];

showToastBtn.addEventListener('click', () => createToast())

function createToast(message = null, type = null) {
    const toastEle = document.createElement('div');
    toastEle.classList.add('toast');
    
    const messageText = message ? message : getRandomMessage();
    toastEle.innerText = messageText;
    const messageType = type ? type : getRandomMessageType();
    toastEle.classList.add(messageType);

    setTimeout(() => {
        toastEle.classList.add('hide')
        setTimeout(() => {
            toastEle.remove()
        }, 400)
    }, MESSAGE_TIMEOUT)
    
    toasts.appendChild(toastEle)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomMessageType() {
    return MESSAGE_TYPE[Math.floor(Math.random() * MESSAGE_TYPE.length)];
}