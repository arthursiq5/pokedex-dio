const urlBase = 'https://pokeapi.co/api/v2/pokemon'

const getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
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