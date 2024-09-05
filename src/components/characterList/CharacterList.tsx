import { useEffect, useState, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { Link } from "react-router-dom"
import { getData } from "../../api/getData"
import {
  addFavoriteCharacterAction,
  setCharacters,
  removeFavoriteCharacterAction,
  removeCharacter,
  addCharacterDetail,
} from "../../features/characterSlice"
import { withErrorApi } from "../../hoc-helpers/withErrorApi"
import type { Character, RootState, CharacterListProps } from "./types"
import like from "../../icons/like.png"
import dizlike from "../../icons/dizlike.png"
import busket from "../../icons/delete.png"
import styles from "./CharacterList.module.css"

const CharacterList: React.FC<CharacterListProps> = ({ setErrorApi }) => {
  const [nextPage, setNextPage] = useState<string | null>(null)
  const [prevPage, setPrevPage] = useState<string | null>(null)

  const [page, setPage] = useState<number>(1)
  const dispatch = useAppDispatch()
  const { character, favoriteCharacters, newCharacters } = useAppSelector(
    (state: RootState) => state.characterSlice,
  )
  const changePage = (num: number) => {
    setPage(page => page + num)
  }

  const getCharacters = useCallback(
    async (page: number) => {
      const res = await getData(page)
      if (res) {
        const { info, results } = res
        const { prev, next } = info
        setNextPage(next)
        setPrevPage(prev)
        const arr = [...newCharacters, ...results]
        dispatch(setCharacters(arr))
      } else {
        setErrorApi(true)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch],
  )
  useEffect(() => {
    getCharacters(page)
  }, [page, getCharacters])

  return (
    <>
      <button
        className="btn"
        disabled={!prevPage}
        onClick={() => changePage(-1)}
      >
        Prev
      </button>
      <button
        className="btn"
        disabled={!nextPage}
        onClick={() => changePage(+1)}
      >
        Next
      </button>
      <ul className={styles.list}>
        {character.map((char: Character) => {
          const isFavorite = favoriteCharacters.some(
            favChar => favChar.id === char.id,
          )

          return (
            <li className={styles.list__items} key={char.id}>
              <Link className={styles.link} to="/info">
                <span
                  className={styles.name__char}
                  onClick={() => dispatch(addCharacterDetail(char))}
                >
                  {char.name.length > 10
                    ? `${char.name.slice(0, 8)}...`
                    : char.name}
                </span>
              </Link>
              <Link className={styles.link} to="/info">
                <img
                  className={styles.img__char}
                  onClick={() => dispatch(addCharacterDetail(char))}
                  src={char.image}
                  alt={char.name}
                />
              </Link>
              <div className={styles.icons}>
                {isFavorite ? (
                  <img
                    className={styles.icon}
                    onClick={() =>
                      dispatch(removeFavoriteCharacterAction(char.id))
                    }
                    src={like}
                    alt="like"
                  />
                ) : (
                  <img
                    className={styles.icon}
                    onClick={() => dispatch(addFavoriteCharacterAction(char))}
                    src={dizlike}
                    alt="dizlike"
                  />
                )}

                <img
                  className={styles.icon}
                  onClick={() => dispatch(removeCharacter(char.id))}
                  src={busket}
                  alt="delete"
                />
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default withErrorApi(CharacterList)
