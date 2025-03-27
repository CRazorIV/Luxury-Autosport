import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [selectedService, setSelectedService] = useState('maintenance');

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    // Service details content based on dropdown selection
    const serviceDetails = {
        maintenance: {
            title: "Maintenance & Repair",
            description: "Our factory-trained technicians use state-of-the-art diagnostic equipment and genuine parts to ensure your luxury vehicle performs at its best.",
            features: [
                "150-point inspection and diagnostics",
                "Scheduled maintenance services",
                "Performance upgrades and tuning",
                "Interior and exterior detailing",
                "24/7 roadside assistance for clients"
            ],
            image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        leasing: {
            title: "Vehicle Leasing",
            description: "Experience the latest luxury models with our flexible leasing options tailored to your driving habits and preferences.",
            features: [
                "Customizable lease terms from 12-48 months",
                "Low down payment options",
                "Inclusive maintenance packages",
                "Easy vehicle upgrades at end of term",
                "Gap coverage included on all leases"
            ],
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        financing: {
            title: "Financing & Insurance",
            description: "Our financial experts work with premium lenders to secure competitive rates and comprehensive coverage for your luxury investment.",
            features: [
                "Customized financing solutions",
                "Competitive interest rates",
                "Extended warranty options",
                "Comprehensive insurance packages",
                "Trade-in and upgrade programs"
            ],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        preowned: {
            title: "Pre-owned Sales",
            description: "Each pre-owned vehicle in our collection undergoes rigorous inspection and certification to ensure premium quality and performance.",
            features: [
                "Certified pre-owned program with 2-year warranty",
                "Complete vehicle history documentation",
                "150-point quality inspection",
                "30-day exchange policy",
                "Preferential financing rates"
            ],
            image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
    };

    // FAQ data
    const faqData = [
        {
            question: "What makes your maintenance service different from other dealerships?",
            answer: "Our maintenance services are performed exclusively by factory-trained technicians with expertise in luxury and performance vehicles. We utilize original manufacturer parts and cutting-edge diagnostic equipment. Additionally, we provide complimentary vehicle pickup and delivery, as well as a loaner vehicle during servicing for your convenience."
        },
        {
            question: "Do you offer customization services?",
            answer: "Yes, we provide comprehensive customization services including performance upgrades, custom interior finishes, exterior modifications, and bespoke personalization options. Our design team works directly with clients to create unique vehicles that match their personal style and performance requirements."
        },
        {
            question: "How does your leasing program work?",
            answer: "Our premium leasing program offers flexible terms from 12-48 months with customizable mileage packages. We include all scheduled maintenance in our lease agreements and provide guaranteed future value protection. At the end of your lease, you can choose to purchase the vehicle, upgrade to a new model, or simply return it with no hidden fees."
        },
        {
            question: "What financing options are available?",
            answer: "We offer various financing solutions including traditional loans, balloon financing, and lease-to-own arrangements. Our finance specialists work with multiple premium lenders to secure the most competitive rates for our clients. We also provide refinancing options for existing luxury vehicles."
        }
    ];

    const selected = serviceDetails[selectedService];

    return (
        <div className="services-page-container">
            <div className="services-hero">
                <div className="services-hero-content">
                    <h1>Luxury Automotive Services</h1>
                    <p>Experience exceptional service tailored to luxury vehicle owners</p>
                </div>
            </div>

            <div className="services-content">
                <section className="services-intro">
                    <h2>Our Premium Services</h2>
                    <p>At Luxury Autos, we provide a comprehensive suite of services designed to enhance your ownership experience. From routine maintenance to bespoke customization, our team of specialists ensures your vehicle receives nothing but the finest care and attention.</p>
                </section>

                {/* Service Dropdown Selection */}
                <section className="service-selector">
                    <h2>Explore Our Services</h2>
                    <div className="selector-container">
                        <select 
                            value={selectedService} 
                            onChange={handleServiceChange}
                            className="service-dropdown"
                        >
                            <option value="maintenance">Maintenance & Repair</option>
                            <option value="leasing">Vehicle Leasing</option>
                            <option value="financing">Financing & Insurance</option>
                            <option value="preowned">Pre-owned Sales</option>
                        </select>
                    </div>

                    {/* Selected Service Details */}
                    <div className="service-details">
                        <div className="service-details-content">
                            <h3>{selected.title}</h3>
                            <p>{selected.description}</p>
                            <ul className="service-features">
                                {selected.features.map((feature, index) => (
                                    <li key={index}>
                                        <span className="feature-check">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="service-cta">
                                Schedule Consultation
                            </Link>
                        </div>
                        <div className="service-image">
                            <img src={selected.image} alt={selected.title} />
                        </div>
                    </div>
                </section>

                {/* Service Process */}
                <section className="service-process">
                    <h2>Our Service Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Consultation</h3>
                            <p>Schedule a one-on-one consultation with our service specialists to discuss your needs</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Assessment</h3>
                            <p>Comprehensive evaluation of your vehicle using advanced diagnostic technology</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Service Plan</h3>
                            <p>Detailed service plan with transparent pricing and timeframe</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Execution</h3>
                            <p>Expert service performed by certified technicians using genuine parts</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Accordion */}
                <section className="services-faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="accordion">
                        {faqData.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                            >
                                <div 
                                    className="accordion-header" 
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3>{faq.question}</h3>
                                    <span className="accordion-icon">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </div>
                                <div className="accordion-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Client Testimonials */}
                <section className="service-testimonials">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonials-container">
                        <div className="testimonial">
                            <div className="testimonial-content">
                                <p>"The service team at Luxury Autos has consistently exceeded my expectations. Their attention to detail and technical expertise is unmatched."</p>
                            </div>
                            <div className="testimonial-author">
                                <h4>Michael R.</h4>
                                <p>Porsche 911 Owner</p>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial-content">
                                <p>"Their financing options made it possible for me to drive my dream car. The process was smooth and transparent from start to finish."</p>
                            </div>
                            <div className="testimonial-author">
                                <h4>Sarah L.</h4>
                                <p>Mercedes-AMG GT Client</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="service-cta-section">
                    <h2>Ready to Experience Premium Service?</h2>
                    <p>Contact our team to discuss your specific requirements</p>
                    <Link to="/contact" className="cta-button">Schedule a Consultation</Link>
                </section>
            </div>
        </div>
    );
};

export default Services;
