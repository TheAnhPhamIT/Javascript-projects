const pokeContainer = document.querySelector('.poke-container');
const pokeCount = 50;
const baseUrl = 'https://pokeapi.co/api/v2/'

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

getPokes()

async function getPokes() {
    pokeContainer.innerHTML = ''
    for(let i = 1; i <= pokeCount; i++) {
        const poke = await getPoke(i);
        const pokeCard = createPokeCard(poke);
        pokeContainer.appendChild(pokeCard);
    }
}

async function getPoke(id) {
    const res = await fetch(`${baseUrl}pokemon/${id}`);
    const data = await res.json();
    return data;
}

function createPokeCard(poke) {
    const pokeId = poke.id.toString().padStart(3, '0');
    const pokeName = poke.name[0].toUpperCase() + poke.name.slice(1);
    const pokeTypes = poke.types.map(type => type.type.name);
    const pokeType = Object.keys(colors).find(type => pokeTypes.indexOf(type) > -1);

    const pokeCard = document.createElement('div');
    pokeCard.classList.add('poke');
    pokeCard.style.background = `${colors[pokeType]}`;
    const pokeInnerHTML = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png" alt="poke">
    </div>
    <div class="info">
        <span class="number">#${pokeId}</span>
        <h3 class="name">${pokeName}</h3>
        <small class="type">Type: <span>${pokeType}</span></small>
    </div>`;
    pokeCard.innerHTML = pokeInnerHTML;
    return pokeCard;
}

