import { useEffect, useState } from 'react'
import './App.css'
import Collection from './components/Collection'

function App() {
  const [collections, setCollections] = useState([])
  useEffect(() => {
    fetch('https://6594eb1f04335332df81a971.mockapi.io/photos')
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((e) => {
        console.error(e)
        alert('Error!')
      })
  }, [])

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
        <input className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {collections.map((collection) => (
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
