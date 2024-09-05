import type { ApiResponse } from "./types"

export const getData = async (page: number): Promise<ApiResponse | false> => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    )
    if (!res.ok) {
      console.log("Error")
      return false
    }
    const data: ApiResponse = await res.json()
    return data
  } catch (error) {
    return false
  }
}
