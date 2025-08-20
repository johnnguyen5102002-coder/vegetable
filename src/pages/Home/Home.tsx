
import ProductList from '../../features/products/components/ProductList.jsx'

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="logo">🌱 VeggieMart</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="overlay"></div>
        <div className="hero__content">
          <h1>Fresh & Organic Vegetables</h1>
          <p>Healthy life starts with fresh food every day.</p>
          <a href="#products" className="btn">
            Shop Now
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We provide the freshest organic vegetables from local farms. 100%
          natural, pesticide-free and delivered straight to your door.
        </p>
      </section>

      <section id="products" className="products">
        <h2>Our Vegetables</h2>
        <ProductList />
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@veggiemart.com</p>
        <p>Phone: +84 123 456 789</p>
      </section>

      <footer className="footer">
        <p>© 2025 VeggieMart. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home
