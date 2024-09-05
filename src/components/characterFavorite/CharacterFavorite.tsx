import { useAppSelector } from "../../store/hooks"
import type { Character } from "../../features/types"
import type { RootState } from "../../store/store"
import styles from "./CharacterFavorite.module.css"
export const CharacterFavorite: React.FC = () => {
  const { favoriteCharacters } = useAppSelector(
    (state: RootState) => state.characterSlice,
  )
  return (
    <ul className={styles.list}>
      {favoriteCharacters.length < 1
        ? "Для того чтобы добавить персонажа в избранное,лайкните его"
        : favoriteCharacters.map((char: Character) => {
            return (
              <li className={styles.list__items} key={char.id}>
                <h2 className={styles.name__char}>{char.name}</h2>
                <img
                  className={styles.img__char}
                  src={char.image}
                  alt={char.name}
                />
              </li>
            )
          })}
    </ul>
  )
}
