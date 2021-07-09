const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('.main');

const BASE_URL = 'https://api.github.com/';

async function getUser(username) {
    try {
        const endpoint = `${BASE_URL}users/${username}`;
        const { data } = await axios.get(endpoint);
        createUser(data);
        getRepos(username);
    } catch(err) {
        if(err.response.status === 404) {
            createErrorCard('Profile not found')
        }
    }
}

async function getRepos(username) {
    try {
        const endpoint = `${BASE_URL}users/${username}/repos?sort=created`
        const { data } = await axios.get(endpoint);
        console.log(data)
        addReposToCard(data)
    } catch(err) {
        createErrorCard('Fetching repos fail')
    }
}

function addReposToCard(repos) {
    const reposEle = document.querySelector('#repos');
    repos.slice(0,10).forEach(repo => {
        const repoEle = document.createElement('a');
        repoEle.classList.add('repo');
        repoEle.href = repo.html_url;
        repoEle.innerText = repo.name;
        repoEle.target = '_blank'
        reposEle.appendChild(repoEle)
    })
}

function createErrorCard(msg) {
    main.innerHTML = `
    <div class="card">
        <p class="message">${msg}</p>
    </div>
    `
}

function createUser(user) {
    main.innerHTML = `
        <div class="card">
            <div class="user-image">
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-profile">
                <h2 class="username">${user.name}</h2>
                <p class="bio">${user.bio || ''}</p>

                <ul class="social-statistic">
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = search.value;
    if(!username) return;
    getUser(username);
    search.value = ''
})