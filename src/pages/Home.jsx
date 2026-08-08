import ProductList from '../components/ProductList.jsx'
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <main className="shop-page">
      <header className="shop-nav">
        <button className="brand brand-button" type="button" >
          ESSENZA <span>PARFUMS</span>
        </button>
        <button className="back-link" type="button" onClick={() => navigate("/")}>Back to story</button>
        <p className="shop-bag">Bag </p>
      </header>

      <section className="shop-header">
        <p className="eyebrow"><span /> The fragrance wardrobe</p>
        <h1>Find your<br /><em>signature.</em></h1>
        <p>Distinctive compositions, thoughtfully made to become part of your story.</p>
      </section>

      <ProductList />
    </main>
  )
}

export default Home;
