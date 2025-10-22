import React from 'react'

const Menu = () => (
  <main className="menu-page">
    <section className="page-hero">
      <h2>Our Menu</h2>
    </section>
    <section className="menu-categories">
      {/* 🔥 FIXED: Hot Coffee */}
      <div className="category">
        <h3>Hot Coffee</h3>
        <div className="menu-items menu-grid">
          <div className="menu-item">
            <img src="/img/espresso.jpg" alt="Espresso" className="menu-image" />
            <div className="menu-item-content">
              <h4>Espresso</h4>
              <p>Rich, bold shot of premium Arabica beans</p>
              <span className="price">$3.50</span>
            </div>
          </div>
          <div className="menu-item">
            <img src="/img/americano.jpg" alt="Americano" className="menu-image" />
            <div className="menu-item-content">
              <h4>Americano</h4>
              <p>Smooth espresso with hot water</p>
              <span className="price">$4.00</span>
            </div>
          </div>
          <div className="menu-item">
            <img src="/img/cappuccino.jpg" alt="Cappuccino" className="menu-image" />
            <div className="menu-item-content">
              <h4>Cappuccino</h4>
              <p>Velvety espresso with steamed milk foam</p>
              <span className="price">$4.50</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 🔥 FIXED: Creamy Classics */}
      <div className="category">
        <h3>Creamy Classics</h3>
        <div className="menu-items menu-grid">
          <div className="menu-item">
            <img src="/img/latte.jpg" alt="Latte" className="menu-image" />
            <div className="menu-item-content">
              <h4>Latte</h4>
              <p>Silky espresso with steamed milk</p>
              <span className="price">$4.75</span>
            </div>
          </div>
          <div className="menu-item">
            <img src="/img/mocha.jpg" alt="Mocha" className="menu-image" />
            <div className="menu-item-content">
              <h4>Mocha</h4>
              <p>Rich chocolate & espresso indulgence</p>
              <span className="price">$5.25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)
export default Menu