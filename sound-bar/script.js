const buttonsContainer = document.querySelector('.buttons');
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const soundBtn = document.createElement('button');
    soundBtn.classList.add('btn');
    soundBtn.innerHTML = sound;

    soundBtn.addEventListener('click', () => {
        pauseAudios();
        const soundAudio = document.getElementById(sound);
        soundAudio.play();
    })

    buttonsContainer.appendChild(soundBtn)
})

function pauseAudios() {
    sounds.forEach(sound => {
        const soundAudio = document.getElementById(sound);
        soundAudio.pause();
        soundAudio.currentTime = 0;
    })
}