const md5 = `8d787709da6d46aee8978e22bb6fb448`
const apiKey = `0b043f0393bef05bcb96c2f66c1eddff`
const https = `http://gateway.marvel.com:/v1/public/characters`
const ALLCHARACTERS = `${https}?ts=1&apikey=${apiKey}&hash=${md5}&limit=100`;
// const getCharacterById = `${https}/${uid}?${md5}`

// http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=0b043f0393bef05bcb96c2f66c1eddff&hash=8d787709da6d46aee8978e22bb6fb448

export const enpoints = {
    ALLCHARACTERS,
    getCharacterById: (id: string) => {
        return `${https}/${id}?ts=1&apikey=${apiKey}&hash=${md5}`
    }
}
