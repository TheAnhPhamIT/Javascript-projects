const result = document.querySelector('#result');
const filter = document.querySelector('#filter');

const listItem = [];

getUsers();

filter.addEventListener('input', e => filterData(e.target.value))

async function getUsers() {
    const res = await fetch('https://randomuser.me/api?results=50');

    const {results} = await res.json();

    result.innerHTML = '';

    results.forEach(user => {
        const userEle = createUserEle(user);
        listItem.push(userEle);
        result.appendChild(userEle)
    });
}

function createUserEle(user) {
    const userEle = document.createElement('li');
    userEle.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `
    return userEle
}

function filterData(searchTerm) {
    listItem.forEach(userEle => {
        if(userEle.innerText.indexOf(searchTerm) > -1) {
            userEle.classList.remove('hide');
        } else {
            userEle.classList.add('hide')
        }
    })
}