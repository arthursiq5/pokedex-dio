import 'normalize.css';
import '../css/global.css'
import '../css/pokemon.css'
import { getPokemons } from './pokedex-api'

const maxRecords = 151
let offset = 0
const limit = 10

const pokemonToLi = (pokemon) => {
    return `<li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>`
}

const addPokemons = (offset, limit) => {
    const pokemons = getPokemons(offset, limit)
    pokemons.then((pokemons = 0) => {
        const html = pokemons.map(pokemonToLi).join('')
        document.getElementById('pokemonsList').innerHTML += html
    })
}

addPokemons(offset, limit)

document.getElementById('loadMoreButton').addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        addPokemons(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        addPokemons(offset, limit)
    }
})
