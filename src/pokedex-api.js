import Pokemon from "./pokemon"

const urlBase = 'https://pokeapi.co/api/v2/pokemon'

const pokejsonToPokedata = (json) => {
    const pokemon = new Pokemon()
    pokemon.number = json.id
    pokemon.name = json.name
    
    const types = json.types.map(typeSlot => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = json.sprites.other.dream_world.front_default

    return pokemon
}

const getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(pokejsonToPokedata)
}

export const getPokemons = (offset=0, limit=5) => {
    const url = `${urlBase}?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(getPokemonDetail))
        .then(detailRequests => Promise.all(detailRequests))
        .then(pokemonsDetails => pokemonsDetails)
}