import { useState } from 'react'
import whyus from "../assets/african-american.webp";
import contactUs from "../assets/portrait-african.webp";
import logo from "../assets/logo.webp";
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

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', { name, email, message })
    }

    return (
        <div className="app">
            <section className="hero">
                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <div className="logo">
                                <LazyLoadImage
                                    src={logo}
                                    loading="lazy"
                                    alt="PowerPro Logo"
                                    width="150"
                                    height="50"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    style={{ cursor: 'pointer' }} // Add cursor style to indicate it's clickable
                                />
                            </div>
                        </div>
                        <div className="hamburger" onClick={toggleMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                            <ul>
                                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                                <li><a href="#about" onClick={closeMenu}>About</a></li>
                                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
                                    src={service.image.src}               // Main image source
                                    srcSet={service.image.srcSet}          // Responsive image sources
                                    sizes={service.image.sizes}            // Responsive sizes
                                    loading="lazy"                         // Lazy loading attribute
                                    alt={service.title}                    // Alt text for accessibility
                                    effect="blur"                          // Blur effect on load
                                    style={{ width: '100%', height: 'auto' }} // Responsive image style
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
                                // srcSet="/assets/african-american-small.webp 480w, /assets/african-american.webp 800w"
                                srcSet={`${whyus} 480w, ${whyus} 800w`}

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
                                srcSet={`${contactUs} 480w, ${contactUs} 800w`}
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
