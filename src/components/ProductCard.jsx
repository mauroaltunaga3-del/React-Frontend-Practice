function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className={`product-image product-image--${product.tone}`}>
        <img src={product.image} alt={`${product.name} perfume bottle`} />
        <span>{product.volume}</span>
      </div>
      <div className="product-info">
        <div>
          <p>{product.type}</p>
          <h2>{product.name}</h2>
        </div>
        <strong>${product.price}</strong>
      </div>
      <p className="product-notes">{product.notes}</p>
      <button type="button" className="add-button" >
        <span>Add to cart</span><span>+</span>
      </button>
    </article>
  )
}

export default ProductCard;
