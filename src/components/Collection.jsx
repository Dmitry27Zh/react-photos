const Collection = ({ name, photos }) => {
  return (
    <div className="collection">
      <img className="collection__big" src={photos[0]} alt="Item" />
      <div className="collection__bottom">
        {photos.map((photo) => (
          <img key={crypto.randomUUID()} className="collection__mini" src={photo} alt="Item" />
        ))}
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default Collection
