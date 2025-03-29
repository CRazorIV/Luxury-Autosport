import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/heroheadervideo.mp4';
import './Home.css';

const Home = () => {
    const carouselRef = useRef(null); // Changed from featuresRef to carouselRef
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Featured vehicles data
    const featuredVehicles = [
        {
            id: 1,
            name: "Porsche 911 Turbo S",
            specs: "640 HP | 0-60 in 2.6s",
            image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Ferrari 488 GTB",
            specs: "661 HP | 0-60 in 3.0s",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "Lamborghini Huracán",
            specs: "631 HP | 0-60 in 2.9s",
            image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            name: "Aston Martin DBS",
            specs: "715 HP | 0-60 in 3.2s",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            name: "McLaren 720S",
            specs: "710 HP | 0-60 in 2.8s",
            image: "https://images.unsplash.com/photo-1617808654153-9b63c69bf6f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    useEffect(() => {
        // Trigger animation after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        // Automatic carousel rotation
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevSlide => 
                prevSlide === featuredVehicles.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearInterval(slideInterval);
        };
    }, [featuredVehicles.length]);

    const scrollToCarousel = () => {
        carouselRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const nextSlide = () => {
        setCurrentSlide(prevSlide => 
            prevSlide === featuredVehicles.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(prevSlide => 
            prevSlide === 0 ? featuredVehicles.length - 1 : prevSlide - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="home-container">
            {/* Hero Section with header styled like Services page */}
            <div className="home-hero">
                <div className="video-background">
                    <video autoPlay muted loop playsInline>
                        <source src={heroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                </div>

                <div className="home-hero-content">
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

                {/* Enhanced Scroll Down Button - Updated to point to carousel */}
                <div className="scroll-down-container" onClick={scrollToCarousel}>
                    <div className="scroll-down-button">
                        <span>Discover</span>
                        <div className="scroll-icon">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <div className="discover-more-container" onClick={scrollToCarousel}>
                    <div className="discover-more-button">
                        <div className="double-arrow">
                            <i className="fas fa-chevron-down"></i>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Vehicles Carousel - Added ref here */}
            <section className="page-preview inventory-preview" ref={carouselRef}>
                <h2>Featured Vehicles</h2>
                <p className="section-subtitle">Explore our handpicked selection of exceptional automobiles</p>

                <div className="carousel-container">
                    <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {featuredVehicles.map((vehicle, index) => (
                            <div className="carousel-slide" key={vehicle.id}>
                                <div className="carousel-image">
                                    <img src={vehicle.image} alt={vehicle.name} />
                                </div>
                                <div className="carousel-content">
                                    <h3>{vehicle.name}</h3>
                                    <p>{vehicle.specs}</p>
                                    <Link to="/inventory" className="view-details-btn">
                                        View Details <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control prev" onClick={prevSlide}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="carousel-control next" onClick={nextSlide}>
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    <div className="carousel-indicators">
                        {featuredVehicles.map((_, index) => (
                            <button 
                                key={index} 
                                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
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

            <section className="page-preview contact-preview">
                <div className="contact-preview-content">
                    <div className="contact-text">
                        <h2>Personal Consultation</h2>
                        <p>Our automotive specialists are ready to assist you in finding the perfect vehicle to match your lifestyle and preferences.</p>
                        <ul className="contact-highlights">
                            <li><i className="fas fa-check-circle"></i> <span>Personalized vehicle recommendations</span></li>
                            <li><i className="fas fa-check-circle"></i> <span>Private showroom appointments</span></li>
                            <li><i className="fas fa-check-circle"></i> <span>Custom order assistance</span></li>
                            <li><i className="fas fa-check-circle"></i> <span>Trade-in evaluations</span></li>
                        </ul>
                        <Link to="/contact" className="cta-button consultation-button">
                            <span>Schedule a Consultation</span>
                            <i className="fas fa-calendar-alt"></i>
                        </Link>
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