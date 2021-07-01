const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=30520b3b996e0d7f7787dbef5886e000';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=30520b3b996e0d7f7787dbef5886e000&query="';

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

getAndShowMovies();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTemp = search.value;
    const movies = await searchMovies(searchTemp);
    search.value = '';
    showMovies(movies);
})

async function getAndShowMovies() {
    const movies = await getMovies(API_URL);
    showMovies(movies)
}

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    const {results} = data;
    return results
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        const movieEle = createMovieEle(movie);
        main.appendChild(movieEle);
    });
}

function createMovieEle(movie) {
    const {poster_path, title, vote_average, overview} = movie;
    const movieEle = document.createElement('div');
    movieEle.classList.add('movie');
    movieEle.innerHTML = `
    <img src="${IMG_PATH}${poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getVoteClass(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
    `
    return movieEle;
}

function getVoteClass(voteAvg) {
    if(voteAvg >= 8) return 'green';
    if(voteAvg >= 5) return 'orange';
    return 'red';
}

async function searchMovies(searchTemp) {
    if(!searchTemp) {
        debugger;
        return window.location.reload();
    }

    const searchUrl = SEARCH_URL + searchTemp;
    const movies = await getMovies(searchUrl);
    return movies;
}