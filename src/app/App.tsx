import { Routes, Route, Link } from "react-router-dom"
import { Filter } from "../components/filter/Filter"
import CharacterList from "../components/characterList/CharacterList"
import { CharacterDetail } from "../components/characterDetail/CharacterDetail"
import { CharacterFavorite } from "../components/characterFavorite/CharacterFavorite"
import { CharacterCreate } from "../components/characterCreate/CharacterCreate"
import styles from "./App.module.css"
const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className="btn">
          <Link to="/create">Create Character</Link>
        </button>
        <Filter />
      </header>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/info" element={<CharacterDetail />} />
        <Route path="/favorite" element={<CharacterFavorite />} />
        <Route path="/create" element={<CharacterCreate />} />
      </Routes>
    </div>
  )
}

export default App
