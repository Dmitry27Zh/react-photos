import { useEffect, useState } from 'react'
import './App.css'
import Collection from './components/Collection'

const CATEGORIES = [
  { id: null, name: 'Все' },
  { id: 1, name: 'Море' },
  { id: 2, name: 'Горы' },
  { id: 3, name: 'Архитектура' },
  { id: 4, name: 'Города' },
]

function App() {
  const [collections, setCollections] = useState([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  useEffect(() => {
    setIsLoading(true)
    const params = `${activeCategory ? `category=${activeCategory}` : ''}`

    fetch(`https://6594eb1f04335332df81a971.mockapi.io/photos?${params}`)
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((e) => {
        console.error(e)
        alert('Error!')
      })
      .finally(() => setIsLoading(false))
  }, [activeCategory])
  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(search.trim().toLowerCase())
  )

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory

            return (
              <li key={category.id} className={isActive ? 'active' : ''} onClick={() => setActiveCategory(category.id)}>
                {category.name}
              </li>
            )
          })}
        </ul>
        <input
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading
          ? 'Loading...'
          : filteredCollections.map((collection) => (
              <Collection key={crypto.randomUUID()} name={collection.name} photos={collection.photos} />
            ))}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, index) => {
          const currentPage = index + 1

          return (
            <li
              key={crypto.randomUUID()}
              className={currentPage === page ? 'active' : ''}
              onClick={() => setPage(currentPage)}
            >
              {currentPage}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
