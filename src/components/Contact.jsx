import React from 'react'
import { useContactForm } from '../utils/forms'

const Contact = () => {
  useContactForm()
  return (
    <main className="contact-page">
      <section className="page-hero">
        <h2>Contact KOPIKO</h2>
        <p>Let's Create Beautiful Moments Together</p>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          {/* 💎 GOLDEN CONTACT CARDS - PAMPANGA EDITION */}
          <div className="contact-cards">
            <div className="contact-card">
              <i className="fas fa-phone"></i>
              <h4>Call Us</h4>
              <p className="contact-value">+63 (45) 123-4567</p>
              <p className="contact-hours">Mon-Sun 7AM-10PM</p>
            </div>
            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h4>Email Us</h4>
              <p className="contact-value">hello@kopiko.com</p>
              <p className="contact-hours">Response within 24hrs</p>
            </div>
            <div className="contact-card">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Visit Us in Pampanga</h4>
              <p className="contact-value">1758 Choco St, Angeles City</p>
              <p className="contact-hours">Free Parking Available</p>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-container">
              <h3>Send Us a Message</h3>
              <form id="contactForm">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select name="subject" required>
                    <option value="">Subject</option>
                    <option value="reservation">Table Reservation</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Tell us about your inquiry..." required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <h3 className="section-title">Our Pampanga Location</h3>
          <div className="location-content">
            <div className="location-info">
              <p><i className="fas fa-clock"></i> Open Daily 7AM - 10PM</p>
              <p><i className="fas fa-coffee"></i> Walk-ins Welcome</p>
              <p><i className="fas fa-parking"></i> Free Parking</p>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8!2d120.588!3d15.136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9b8a9173c9d%3A0x2f8c9e6b8b8b8b8b!2sAngeles%20City%2C%20Pampanga%2C%20Philippines!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{border:0, borderRadius:'15px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KOPIKO Pampanga Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact