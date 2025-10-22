import React from 'react'
import { useFeedbackForm } from '../utils/forms'

const Home = () => {
  useFeedbackForm()

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to KOPIKO</h2>
          <p>Where every sip tells a story of tradition and elegance</p>
           <Link to="/menu" className="cta-button">Explore Menu</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <i className="fas fa-coffee"></i>
          <h3>Premium Beans</h3>
          <p>Hand-roasted 100% Arabica from sustainable estates, delivering unmatched richness and aroma.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-crown"></i>
          <h3>Expert Baristas</h3>
          <p>Master artisans crafting your perfect cup with precision and passion since 1925.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-heart"></i>
          <h3>Cozy Ambiance</h3>
          <p>Velvet seating, candlelight, and intimate spaces for your perfect coffee moment.</p>
        </div>
      </section>

      <section className="feedback-section">
        <div className="form-container">
          <h2>Share Your Experience</h2>
          <form id="feedbackForm" className="feedback-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select name="rating" required>
                <option value="">Your Rating</option>
                <option value="5">★ 5 Stars</option>
                <option value="4">★ 4 Stars</option>
                <option value="3">★ 3 Stars</option>
                <option value="2">★ 2 Stars</option>
                <option value="1">★ 1 Star</option>
              </select>
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Tell us about your experience..." required></textarea>
            </div>
            <button type="submit" className="submit-button">Share Feedback</button>
          </form>
        </div>
      </section>
    </main>
  )
}
export default Home