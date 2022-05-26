const md5 = `8d787709da6d46aee8978e22bb6fb448`
const apiKey = `0b043f0393bef05bcb96c2f66c1eddff`
const https = `http://gateway.marvel.com:/v1/public/characters`
const httpsr = `http://gateway.marvel.com:/v1/public/comics`

export const enpoints = {

    getAllCharacters: (limit: number) => {
        return `${https}?ts=1&apikey=${apiKey}&hash=${md5}&limit=${limit}`;
    },

    getAllComics: (id: string) => {
        return `${httpsr}/${id}?ts=1&apikey=${apiKey}&hash=${md5}`
    },

    getCharacterById: (id: string) => {
        return `${https}/${id}?ts=1&apikey=${apiKey}&hash=${md5}`
    },

    getCharacterByName: (name: string) => {
        return `${https}?ts=1&nameStartsWith=${name}&apikey=${apiKey}&hash=${md5}&limit=100`
    }
}
