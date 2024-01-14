import 'normalize.css';
import '../css/global.css'
import { getPokemons } from './pokedex-api'

const pokemonToLi = (pokemon) => {
    return `<li>${JSON.stringify(pokemon)}</li>`
}

const pokemons = getPokemons()
pokemons.then((pokemons = 0) => {
    const html = pokemons.map(pokemonToLi).join('')
    document.getElementById('pokemonsList').innerHTML += html
})
