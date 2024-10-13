import React from 'react';


const About = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <h2>About Swift Sales</h2>
        </div>
        <div className="about-section">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              At D&M Studios, we're passionate about empowering businesses with cutting-edge sales management tools. Swift Sales is our flagship product, designed to streamline your sales process and boost your bottom line.
            </p>
            <div className="image-gallery">
              <img
                className="gallery-image"
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Team collaboration in modern office"
                width="240"
                height="160"
              />
              <img
                className="gallery-image"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Data analytics dashboard"
                width="240"
                height="160"
              />
              <img
                className="gallery-image"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Business meeting with laptop"
                width="240"
                height="160"
              />
            </div>
          </div>
          <div className="about-card">
            <h3>Key Features</h3>
            <ul className="feature-list">
              <li><i className="fas fa-check-circle"></i> Real-time sales tracking and analytics</li>
              <li><i className="fas fa-check-circle"></i> Inventory management with automatic alerts</li>
              <li><i className="fas fa-check-circle"></i> Customer relationship management (CRM) integration</li>
              <li><i className="fas fa-check-circle"></i> Multi-currency support for global businesses</li>
              <li><i className="fas fa-check-circle"></i> Customizable reports and dashboards</li>
              <li><i className="fas fa-check-circle"></i> Secure cloud-based storage and backups</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>Our Team</h3>
            <p>
              Swift Sales is developed and maintained by a dedicated team of software engineers, UX designers, and business analysts. With decades of combined experience in the retail and tech industries, we're committed to delivering a product that meets the evolving needs of modern businesses.
            </p>
            <div className="image-gallery">
              <img
                className="gallery-image"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Diverse team in modern office"
                width="240"
                height="160"
              />
              <img
                className="gallery-image"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Software developer at work"
                width="240"
                height="160"
              />
              <img
                className="gallery-image"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Team brainstorming session"
                width="240"
                height="160"
              />
            </div>
          </div>
          <div className="about-card">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i> support@dmstudios.com
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i> +1 (555) 123-4567
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i> 123 Tech Lane, Silicon Valley, CA 94025
              </div>
              <div className="contact-item">
                <i className="fas fa-globe"></i> www.dmstudios.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

