export interface Character {
  id: number
  name: string
  image: string
  status: string
  gender: string
}
export interface CharactersState {
  character: Character[]
  newCharacters: Character[]
  favoriteCharacters: Character[]
  characterDetail: Character
}
