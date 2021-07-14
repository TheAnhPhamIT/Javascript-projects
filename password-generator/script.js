const clipboardBtn = document.querySelector('#clipboard');
const resultLabel = document.querySelector('#result');
const generateBtn = document.querySelector('#generate');
const lengthInput = document.querySelector('#length');
const uppercaseCheckbox = document.querySelector('#uppercase');
const lowercaseCheckbox = document.querySelector('#lowercase');
const numbersCheckbox = document.querySelector('#numbers');
const symbolsCheckbox = document.querySelector('#symbols');

const randomFunc = {
    lower: getRandomLowercaseLetter,
    upper: getRandomUppercaseLetter,
    numbers: getRandomNumbersLetter,
    symbols: getRandomSymbolsLetter
}

generateBtn.addEventListener('click', handleGeneratePassword);

clipboardBtn.addEventListener('click', handelClipboardClick);

function handelClipboardClick() {
    const password = resultLabel.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Copied to clipboard');
}

function handleGeneratePassword() {
    const length = lengthInput.value;
    const hasUppercase = uppercaseCheckbox.checked;
    const hasLowercase = lowercaseCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;

    const passwordGenerated = generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);

    resultLabel.innerHTML = passwordGenerated;
}

function generatePassword(length, upper, lower, numbers, symbols) {
    let password = '';
    const randomFuncs = getRandomFuncs(upper, lower, numbers, symbols);
    if(randomFuncs.length <= 0) return;

    for(let i = 0; i < length; i++) {
        const randomFunc = randomFuncs[i % randomFuncs.length];
        password += randomFunc();
    }

    return shuffleStr(password);
}

function shuffleStr(str) {
    const strArr = str.split('');
    shuffleArray(strArr);
    return strArr.join('');
}

function shuffleArray(arr) {
    arr.sort(() => 0.5 - Math.random())
}

function getRandomFuncs(upper, lower, numbers, symbols) {
    const arrFunc = [];
    if(upper) arrFunc.push(randomFunc.upper);
    if(lower) arrFunc.push(randomFunc.lower);
    if(numbers) arrFunc.push(randomFunc.numbers);
    if(symbols) arrFunc.push(randomFunc.symbols);
    return arrFunc;
}

function getRandomLowercaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUppercaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumbersLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbolsLetter() {
    const symbols = '@#$%&!';
    return symbols[Math.floor(Math.random() * symbols.length)]
}