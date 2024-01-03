import { useEffect, useState } from 'react'
import './App.css'
import Collection from './components/Collection'

function App() {
  const [collections, setCollections] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('https://6594eb1f04335332df81a971.mockapi.io/photos')
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((e) => {
        console.error(e)
        alert('Error!')
      })
  }, [])
  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(search.trim().toLowerCase())
  )

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Архитектура</li>
          <li>Горы</li>
          <li>Архитектура</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {filteredCollections.map((collection) => (
          <Collection key={crypto.randomUUID()} name={collection.name} photos={collection.photos} />
        ))}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App
