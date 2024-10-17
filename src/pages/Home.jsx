import { useState } from 'react'
import { Bolt, PhoneCall, Wrench, Shield, Clock, ThumbsUp, Facebook } from 'lucide-react'
import topImage from "../assets/header.jpg";
import whyus from "../assets/team.jpg";
import contactUs from "../assets/car.jpg";
import logo from "../assets/logo.png"
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing Font Awesome icons


export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
  }

  return (
    <div className="app">
      {/* Hero Section with Overlay Header */}
      <section className="hero">
        <img src={topImage} className="hero-image" alt="Hero" />
        <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
        <img src={logo} alt="" />     
   </div>

        {/* Hamburger Icon (Only Visible on Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
        <div className="hero-content">
          <div className="container">
            <h1>Expert Electrical Services</h1>
            <p>Powering your home and business with safety and reliability</p>
            <a className='contact-us-btn' href="#contact">Contact</a>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-grid">
            {[
              { icon: <Bolt />, title: "Electrical Repairs", description: "Quick and efficient repair services for all your electrical issues.", image: "/assets/electrician-working.jpg" },
              { icon: <Wrench />, title: "Installations", description: "Professional installation of electrical systems and appliances.", image: "/assets/male-electrician-works.jpg" },
              { icon: <Shield />, title: "Safety Inspections", description: "Comprehensive safety checks to ensure your property meets all standards.", image: "/assets/verification.jpg" },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} />
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="about-content">
            <div className="reasons">
              {[
                { icon: <Clock />, title: "24/7 Availability", description: "We're here for you around the clock for any electrical emergency." },
                { icon: <ThumbsUp />, title: "Licensed & Insured", description: "Fully certified professionals you can trust." },
                { icon: <PhoneCall />, title: "Excellent Support", description: "Friendly customer service and free consultations." },
              ].map((reason, index) => (
                <div key={index} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <div className="reason-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="team-image">
              <img src={whyus} alt="Our team of electricians" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-image">
              <img src={contactUs} alt="Electrician van" />
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer with WhatsApp and Facebook Links */}
      <footer className="footer">
  <div className="container">
    <p>&copy; {new Date().getFullYear()} PowerPro Electricians. All rights reserved.</p>
    <p>Licensed and Insured | Available 24/7</p>
    <div className="social-links">
      <a
        href="https://www.facebook.com/profile.php?id=61567007821122&mibextid=rS40aB7S9Ucbxw6v"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>

      <a
        href="https://wa.me/27684734992"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  </div>
</footer>

    </div>
  )
}
