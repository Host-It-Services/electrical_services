import { useState } from 'react'
import whyus from "../assets/team.webp";
import contactUs from "../assets/call.webp";
import logo from "../assets/logo.webp";
import header_image from "../assets/header.webp"
import { services } from "../data/service_data";
import { Clock, ThumbsUp, PhoneCall } from 'lucide-react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




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
                <LazyLoadImage
                     src={header_image}
                     loading="lazy"

                     className="hero-image"
                     srcSet="/src/assets/header-small.webp 768w, /src/assets/header.webp 1200w"
                     sizes="(max-width: 768px) 768px, 100vw"
                     alt="Hero Background"
                    

                />
                <header className="header">
                    <div className="container">
                        {/* Logo */}
                        <div className="logo">
                            <LazyLoadImage src={logo} loading="lazy" alt="" width="150" height="50" />
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
                        <a className='contact-us-btn' href="#contact">Contact Us</a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="service-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <LazyLoadImage
                                    src={service.image}
                                    loading="lazy"
                                    alt={service.title}
                                    effect="blur"
                                    style={{ width: '100%', height: 'auto' }} // Makes the image responsive
                                    sizes="(max-width: 600px) 50vw, 220px"
                                />

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
                            <LazyLoadImage
                                src={whyus}
                                alt="Our team of electricians"
                                effect="blur"
                                loading="lazy"
                                srcSet="/assets/team-small.webp 480w, /assets/team.webp 800w"
                                sizes="(max-width: 600px) 480px, 800px"
                            />
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
                            <LazyLoadImage
                                src={contactUs}
                                alt="Electrician van"
                                effect="blur"
                                loading="lazy"
                                sizes="(max-width: 600px) 480px, 800px"
                            />
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
