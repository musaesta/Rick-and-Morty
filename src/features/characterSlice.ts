import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Character, CharactersState } from "./types"
const initialState: CharactersState = {
  character: [],
  newCharacters: [],
  favoriteCharacters: [],
  characterDetail: { id: 0, name: "", image: "", status: "", gender: "" },
}

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacterDetail(state, action: PayloadAction<Character>) {
      state.characterDetail = { ...action.payload }
    },

    addCharacter(state, action: PayloadAction<Character>) {
      state.newCharacters.push(action.payload)
    },

    removeCharacter(state, action: PayloadAction<number>) {
      state.character = state.character.filter(
        character => character.id !== action.payload,
      )
      state.newCharacters = state.newCharacters.filter(
        character => character.id !== action.payload,
      )
    },

    addFavoriteCharacterAction(state, action: PayloadAction<Character>) {
      state.favoriteCharacters.push(action.payload)
    },

    removeFavoriteCharacterAction(state, action: PayloadAction<number>) {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        character => character.id !== action.payload,
      )
    },

    setCharacters(state, action: PayloadAction<Character[]>) {
      state.character = action.payload
    },
    clearFavoriteCharacters(state) {
      state.favoriteCharacters = []
    },
  },
})

export const {
  addCharacter,
  removeCharacter,
  setCharacters,
  addFavoriteCharacterAction,
  removeFavoriteCharacterAction,
  clearFavoriteCharacters,
  addCharacterDetail,
} = characterSlice.actions

export default characterSlice.reducer
