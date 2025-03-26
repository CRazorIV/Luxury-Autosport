import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Luxury Autos</h3>
                    <p>The premier destination for exceptional luxury vehicles and unparalleled automotive experiences.</p>
                    <div className="contact-info">
                        <div><i className="fas fa-map-marker-alt"></i> 123 Prestige Avenue, Beverly Hills, CA</div>
                        <div><i className="fas fa-phone"></i> +1 (800) LUXE-AUTO</div>
                        <div><i className="fas fa-envelope"></i> info@luxuryautos.com</div>
                    </div>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/inventory">Vehicle Collection</Link></li>
                        <li><Link to="/services">Premium Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/financing">Financing Options</Link></li>
                    </ul>
                </div>

                <div className="footer-section subscribe">
                    <h3>Subscribe to Our Newsletter</h3>
                    <p>Receive exclusive offers, new arrivals, and VIP events.</p>

                    {subscribed ? (
                        <div className="subscribe-success">
                            Thank you for subscribing!
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    )}
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} Luxury Autos. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="https://crazoriv.github.io/" target="_blank" rel="noopener noreferrer" className="portfolio-link">Website by <span className="highlight">Yuri Kuvalja</span></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;