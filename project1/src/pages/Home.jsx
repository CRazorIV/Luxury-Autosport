import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const featuresRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const scrollToFeatures = () => {
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            {/* Enhanced Hero Section with Video Background */}
            <section className="hero">
                <div className="video-background">
                    <video autoPlay muted loop>
                        <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47b5e33cd8c592e&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                </div>

                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    <h1>
                        <span className="title-luxury">Luxury</span>
                        <span className="title-autos">Autos</span>
                    </h1>
                    <div className="title-separator"></div>
                    <p className="subtitle">Performance • Precision • Perfection</p>
                    <div className="hero-buttons">
                        <Link to="/inventory" className="cta-button">
                            <span>See Collection</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link to="/contact" className="cta-button outline">
                            <i className="fas fa-envelope"></i>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>

                {/* Enhanced Scroll Down Button */}
                <div className="scroll-down-container" onClick={scrollToFeatures}>
                    <div className="scroll-down-button">
                        <span>Discover</span>
                        <div className="scroll-icon">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                {/* Animated corner accents */}
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>
            </section>

            {/* Features Section with Arrow Links */}
            <section className="features" ref={featuresRef}>
                <h2>The Luxury Autos Difference</h2>
                <div className="features-grid">
                    <div className="feature">
                        <div className="feature-icon">
                            <i className="fas fa-gem"></i>
                        </div>
                        <h3>Curated Selection</h3>
                        <p>Hand-selected premium vehicles from the world's finest manufacturers</p>
                        <Link to="/inventory" className="feature-link">
                            <span>Explore Our Collection</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>Certified Authentication</h3>
                        <p>Every vehicle undergoes a rigorous 150-point inspection process</p>
                        <Link to="/services" className="feature-link">
                            <span>Learn About Our Process</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <i className="fas fa-concierge-bell"></i>
                        </div>
                        <h3>White Glove Service</h3>
                        <p>Personalized concierge experience from test drive to delivery</p>
                        <Link to="/services" className="feature-link">
                            <span>Discover Our Services</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Inventory Section */}
            <section className="page-preview inventory-preview">
                <h2>Featured Vehicles</h2>
                <p className="section-subtitle">Explore our handpicked selection of exceptional automobiles</p>

                <div className="preview-grid">
                    <div className="car-preview">
                        <div className="car-preview-image">
                            <img src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Porsche 911" />
                        </div>
                        <h3>Porsche 911 Turbo S</h3>
                        <p>640 HP | 0-60 in 2.6s</p>
                    </div>
                    <div className="car-preview">
                        <div className="car-preview-image">
                            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ferrari" />
                        </div>
                        <h3>Ferrari 488 GTB</h3>
                        <p>661 HP | 0-60 in 3.0s</p>
                    </div>
                    <div className="car-preview">
                        <div className="car-preview-image">
                            <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lamborghini" />
                        </div>
                        <h3>Lamborghini Huracán</h3>
                        <p>631 HP | 0-60 in 2.9s</p>
                    </div>
                </div>

                <div className="preview-cta">
                    <Link to="/inventory" className="cta-button">View Full Collection</Link>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="page-preview services-preview">
                <h2>Premium Services</h2>
                <p className="section-subtitle">Experience automotive excellence with our comprehensive services</p>

                <div className="services-preview-grid">
                    <div className="service-preview">
                        <div className="service-icon"><i className="fas fa-tools"></i></div>
                        <h3>Maintenance & Repair</h3>
                        <p>Factory-trained technicians and state-of-the-art equipment ensure your vehicle performs at its peak</p>
                    </div>
                    <div className="service-preview">
                        <div className="service-icon"><i className="fas fa-clipboard-check"></i></div>
                        <h3>Vehicle Inspection</h3>
                        <p>Comprehensive 150-point inspection process for every vehicle in our inventory</p>
                    </div>
                    <div className="service-preview">
                        <div className="service-icon"><i className="fas fa-hand-holding-usd"></i></div>
                        <h3>Financing Options</h3>
                        <p>Tailored financing solutions with competitive rates and flexible terms</p>
                    </div>
                    <div className="service-preview">
                        <div className="service-icon"><i className="fas fa-car-side"></i></div>
                        <h3>Concierge Delivery</h3>
                        <p>White-glove delivery service to your location of choice</p>
                    </div>
                </div>

                <div className="preview-cta">
                    <Link to="/services" className="cta-button">Explore Our Services</Link>
                </div>
            </section>

            {/* Contact Preview Section */}
            <section className="page-preview contact-preview">
                <div className="contact-preview-content">
                    <div className="contact-text">
                        <h2>Personal Consultation</h2>
                        <p>Our automotive specialists are ready to assist you in finding the perfect vehicle to match your lifestyle and preferences.</p>
                        <ul className="contact-highlights">
                            <li><i className="fas fa-check-circle"></i> Personalized vehicle recommendations</li>
                            <li><i className="fas fa-check-circle"></i> Private showroom appointments</li>
                            <li><i className="fas fa-check-circle"></i> Custom order assistance</li>
                            <li><i className="fas fa-check-circle"></i> Trade-in evaluations</li>
                        </ul>
                        <Link to="/contact" className="cta-button">Schedule a Consultation</Link>
                    </div>
                    <div className="contact-image">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury car consultant" />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <h2>Ready to elevate your driving experience?</h2>
                <p>Join our exclusive clientele of discerning automotive enthusiasts</p>
                <Link to="/contact" className="cta-button">Schedule a Private Viewing</Link>
            </section>
        </div>
    );
};

export default Home;