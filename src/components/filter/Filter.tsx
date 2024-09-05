import { Link } from "react-router-dom"
import filter from "../../icons/filter.png"
import styles from "./Filter.module.css"
import { useRef, useState } from "react"
export const Filter: React.FC = () => {
  const myRef = useRef<HTMLUListElement | null>(null)
  const [openFilter, setOpenFilter] = useState<boolean>(false)

  const handleClick = () => {
    if (myRef.current !== null && !openFilter) {
      myRef.current.style.display = "block"
      setOpenFilter(true)
    }
    if (myRef.current !== null && openFilter) {
      myRef.current.style.display = "none"
      setOpenFilter(false)
    }
  }
  return (
    <div onClick={handleClick} className={styles.filter}>
      <img className={styles.filter__icon} src={filter} alt="filter" />
      <ul ref={myRef} className={styles.filter__content}>
        <li>
          <Link className="link" to="/">
            All characters
          </Link>
        </li>
        <li>
          <Link className="link" to="/favorite">
            Favorite
          </Link>
        </li>
      </ul>
    </div>
  )
}
