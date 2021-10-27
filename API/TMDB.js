const API_TOKEN = "419cfabf20652ce4f262e9fef0b6e52b"


export function getBySearchedText (text, page) {
    const url = ('https://api.themoviedb.org/3/search/movie?api_key='
        + API_TOKEN + '&language=fr&query=' + text + "&page=" + page)

    return fetch(url)
    .then( (response) => response.json() )
    .catch ((error) => console.error(error))
    
  }

export function getImage (name) {
    return 'https://images.tmdb.org/t/p/w300' + name
}