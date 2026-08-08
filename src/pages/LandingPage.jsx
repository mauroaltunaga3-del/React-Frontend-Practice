import heroPerfume from '../assets/perfume-hero.png'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M7 5h8v8" />
  </svg>
)

function LandingPage() {
     const navigate = useNavigate();  

  return (
    <main className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Essenza home">ESSENZA <span>PARFUMS</span></a>
        <button className="menu-button" type="button" aria-label="Open menu" aria-expanded="false"><span /><span /></button>
        <nav className="nav-links">
          <button type="button">Collection</button>
          <a href="#story">Our Story</a>
          <a href="#journal">Journal</a>
        </nav>
        <button className="bag-link" type="button">Bag <span>0</span></button>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Eau de parfum · No. 01</p>
          <h1>The Art of<br /><em>Presence.</em></h1>
          <p className="intro">A fragrance that lingers beyond the moment. Crafted with exceptional ingredients for those who leave an impression without saying a word.</p>
          <button className="shop-button" type="button" onClick={() => navigate("/home")} ><span>Shop now</span><ArrowUpRight /></button>
          <div className="notes" aria-label="Fragrance notes">
            <div><small>Top note</small><strong>Bergamot</strong></div>
            <div><small>Heart note</small><strong>Amber Wood</strong></div>
            <div><small>Base note</small><strong>White Musk</strong></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroPerfume} alt="Essenza amber perfume on a stone pedestal" />
          <div className="edition-mark"><span>01</span><p>Private<br />Edition</p></div>
          <p className="vertical-label">Extrait de parfum · 100 ml</p>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>Scroll to discover</span><i /></div>
      </section>

      <section className="collection" id="story">
        <p className="eyebrow"><span /> The signature scent</p>
        <h2>Designed to be<br /><em>remembered.</em></h2>
        <p>A magnetic composition of contrasts: luminous at first, warm at heart, and deeply enveloping in the dry down.</p>
        <button className="discover-button" type="button">Discover the collection <ArrowUpRight /></button>
      </section>
      <section className="story" id="journal"><p>Made slowly. Worn boldly.</p></section>
    </main>
  )
}

export default LandingPage;
