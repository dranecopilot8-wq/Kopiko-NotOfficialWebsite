import React from 'react'

const About = () => (
  <main className="about-page">
    <section className="page-hero">
      <h2>About KOPIKO</h2>
      <p>Est. 1925 • Where Tradition Meets Elegance</p>
    </section>

    <section className="content-section story-section">
      <div className="story-content">
        <div className="story-text">
          <h3>Our Legacy</h3>
          <p>
            Founded in 1925 by the Flores ancestors in the verdant highlands of Pampanga, 
            KOPIKO was born from a small family roastery. For almost a century, we've 
            mastered the craft of exceptional coffee with enduring passion and heritage. 
            Each cup weaves a tale of ancestry, artistry, and the comforting spirit of community.
          </p>
          <p>
            Today, KOPIKO harmonizes age-old traditions with contemporary sophistication, 
            creating intimate havens where cherished moments bloom with every treasured sip.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">1925</span>
            <p>Flores ancestors found family roastery</p>
          </div>
          <div className="timeline-item">
            <span className="year">1950</span>
            <p>First KOPIKO café opens</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-line"></span>
            <span className="year">2025</span>
            <p>100 Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>

    <section className="values-section">
      <h3 className="section-title">Our Values</h3>
      <div className="values-grid">
        <div className="value-card">
          <i className="fas fa-coffee"></i>
          <h4>Premium Quality</h4>
          <p>Hand-roasted 100% Arabica from sustainable estates, delivering unmatched richness.</p>
        </div>
        <div className="value-card">
          <i className="fas fa-users"></i>
          <h4>Community Heart</h4>
          <p>A warm, welcoming sanctuary where connections flourish over every cup.</p>
        </div>
        <div className="value-card">
          <i className="fas fa-leaf"></i>
          <h4>Sustainable Soul</h4>
          <p>Eco-friendly practices from bean to cup, nurturing our planet for generations.</p>
        </div>
      </div>
    </section>
  </main>
)
export default About