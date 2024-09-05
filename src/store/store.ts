import { configureStore } from "@reduxjs/toolkit"
import characterSlice from "../features/characterSlice"
export const store = configureStore({
  reducer: { characterSlice },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
