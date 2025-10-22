import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const location = useLocation()
  const toggleMenu = () => setIsActive(!isActive)
  const closeMenu = () => setIsActive(false)
  const getActiveClass = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img src="/img/kopiko-logo.png" alt="KOPIKO" className="logo" />
          </Link>
          <h1 className="brand-name">KOPIKO</h1>
        </div>
        <button className={`burger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span><span className="bar"></span><span className="bar"></span>
        </button>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${getActiveClass('/')}`} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/menu" className={`nav-link ${getActiveClass('/menu')}`} onClick={closeMenu}>Menu</Link></li>
          <li><Link to="/about" className={`nav-link ${getActiveClass('/about')}`} onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" className={`nav-link ${getActiveClass('/contact')}`} onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/reservations" className={`nav-link ${getActiveClass('/reservations')}`} onClick={closeMenu}>Reservation</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar