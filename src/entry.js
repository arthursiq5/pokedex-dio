import 'normalize.css';
import '../css/global.css'
import { getPokemons } from './pokedex-api'

const pokemonToLi = (pokemon) => {
    return `<li>
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

const pokemons = getPokemons()
pokemons.then((pokemons = 0) => {
    const html = pokemons.map(pokemonToLi).join('')
    document.getElementById('pokemonsList').innerHTML += html
})
