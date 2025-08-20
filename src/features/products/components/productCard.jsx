const ProductCard = ({ image, name, summary, price, handleClick }) => {
  return (
    <div className="card">
      <img src={`/images/${image}`} alt={name} />
      <h3>{name}</h3>
      <h3>{price.toLocaleString()} VNĐ</h3>
      <p>{summary}</p>
      <button className="btn" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
