import { useAppSelector } from "../../store/hooks"
import { Link } from "react-router-dom"
import type { RootState } from "../../store/store"
import styles from "./CharacterDetail.module.css"
export const CharacterDetail: React.FC = () => {
  const { characterDetail } = useAppSelector(
    (state: RootState) => state.characterSlice,
  )
  return (
    <div className={styles.container}>
      <div className={styles.wrapper__back}>
        <Link to="/" className="link">
          Go back
        </Link>
      </div>
      <div className={styles.wrapper}>
        <img
          className={styles.characterImg}
          src={characterDetail.image}
          alt={characterDetail.name}
        />
        <ul className={styles.list}>
          <li className={styles.list__item}>Name: {characterDetail.name}</li>

          <li className={styles.list__item}>
            Gender: {characterDetail.gender}
          </li>
          <li className={styles.list__item}>
            Status: {characterDetail.status}
          </li>
        </ul>
      </div>
    </div>
  )
}
