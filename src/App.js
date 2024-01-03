import './App.css'

function App() {
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
        <div className="collection">
          <img
            className="collection__big"
            src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Item"
          />
          <div className="collection__bottom">
            <img
              className="collection__mini"
              src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Item"
            />
            <img
              className="collection__mini"
              src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Item"
            />
            <img
              className="collection__mini"
              src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Item"
            />
          </div>
          <h4>Поход в горы</h4>
        </div>
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
