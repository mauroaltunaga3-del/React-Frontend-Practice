import heroPerfume from '../assets/perfume-hero.png'
import ProductCard from './ProductCard.jsx'

const products = [
  { id: 1, name: 'Amber Veil', type: 'Eau de parfum', price: 148, volume: '100 ml', notes: 'Bergamot · Amber wood · White musk', tone: 'amber', image: heroPerfume },
  { id: 2, name: 'Noir Santal', type: 'Extrait de parfum', price: 182, volume: '75 ml', notes: 'Black pepper · Sandalwood · Tonka bean', tone: 'noir', image: heroPerfume },
  { id: 3, name: 'Golden Neroli', type: 'Eau de parfum', price: 156, volume: '100 ml', notes: 'Neroli · Orange blossom · Cedar', tone: 'gold', image: heroPerfume },
  { id: 4, name: 'Velvet Iris', type: 'Extrait de parfum', price: 190, volume: '75 ml', notes: 'Iris · Violet leaf · Suede', tone: 'iris', image: heroPerfume },
]

function ProductList() {
  return (
    <section className="product-section" aria-label="Perfume collection">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList;
