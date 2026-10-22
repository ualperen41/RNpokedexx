interface Pokemon {
    id:string,
    name:string,
    types:string[]
}

interface PokedexList {
pokedexList:Pokemon[]
}

export type {PokedexList,Pokemon}