const baseUrl = 'https://swapi.dev'

export function getAllStarships(){
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

export function getStarshipDetail(url){
  return fetch(`${url}`)
  .then(res => res.json())
}