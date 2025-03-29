import { useState } from 'react';
import './Financing.css';

const Financing = () => {
    const [formData, setFormData] = useState({
        vehicle: '',
        price: '',
        downPayment: '',
        creditScore: 'excellent',
        term: '36',
        name: '',
        email: '',
        phone: '',
    });

    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState({
        monthlyPayment: 0,
        interestRate: 0,
        totalInterest: 0,
        totalPayment: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculatePayment = (e) => {
        e.preventDefault();
        
        // Get values from form
        const principal = parseFloat(formData.price) - parseFloat(formData.downPayment || 0);
        const termMonths = parseInt(formData.term);
        
        // Determine interest rate based on credit score
        let interestRate;
        switch(formData.creditScore) {
            case 'excellent': // 750+
                interestRate = 3.5;
                break;
            case 'good': // 700-749
                interestRate = 5.2;
                break;
            case 'fair': // 650-699
                interestRate = 7.8;
                break;
            case 'poor': // Below 650
                interestRate = 11.5;
                break;
            default:
                interestRate = 5.2;
        }
        
        // Calculate monthly payment using the loan formula
        // M = P * (r(1+r)^n) / ((1+r)^n - 1)
        const monthlyRate = interestRate / 100 / 12;
        const monthlyPayment = principal * 
            (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
            (Math.pow(1 + monthlyRate, termMonths) - 1);
        
        const totalPayment = monthlyPayment * termMonths;
        const totalInterest = totalPayment - principal;
        
        setResults({
            monthlyPayment: monthlyPayment.toFixed(2),
            interestRate: interestRate.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            totalPayment: totalPayment.toFixed(2)
        });
        
        setShowResults(true);
        
        // Scroll to results
        setTimeout(() => {
            document.getElementById('financing-results').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="financing-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Financing Your Luxury Vehicle</h1>
                    <p>Experience our premium financing options tailored to your needs</p>
                </div>
            </div>

            <div className="financing-container">
                <div className="intro-section">
                    <h2>Flexible Financing Solutions</h2>
                    <p>At Luxury Autos, we understand that acquiring your dream vehicle is an important investment. We offer a range of financing options that make luxury attainable with terms that suit your financial preferences.</p>
                    <div className="intro-features">
                        <div className="feature">
                            <i className="fas fa-percentage"></i>
                            <h3>Competitive Rates</h3>
                            <p>Access industry-leading interest rates through our network of premium financial institutions.</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-file-contract"></i>
                            <h3>Customized Terms</h3>
                            <p>Flexible lease and finance terms from 24 to 84 months to suit your lifestyle and budget.</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-shield-alt"></i>
                            <h3>Protection Plans</h3>
                            <p>Comprehensive vehicle protection options to safeguard your investment for years to come.</p>
                        </div>
                    </div>
                </div>

                <div className="financing-options">
                    <h2>Our Financing Options</h2>
                    
                    <div className="option-cards">
                        <div className="option-card">
                            <div className="card-header">
                                <i className="fas fa-car"></i>
                                <h3>Traditional Financing</h3>
                            </div>
                            <div className="card-content">
                                <p>Take full ownership of your luxury vehicle with our competitive financing rates.</p>
                                <ul>
                                    <li>Terms from 36 to 84 months</li>
                                    <li>Competitive interest rates</li>
                                    <li>No mileage restrictions</li>
                                    <li>Build equity with each payment</li>
                                    <li>Customize your vehicle as desired</li>
                                </ul>
                                <p className="ideal-for">Ideal for: Long-term ownership, high mileage drivers</p>
                            </div>
                        </div>
                        
                        <div className="option-card premium">
                            <div className="ribbon">Popular</div>
                            <div className="card-header">
                                <i className="fas fa-gem"></i>
                                <h3>Luxury Leasing</h3>
                            </div>
                            <div className="card-content">
                                <p>Experience the latest luxury with lower monthly payments and flexibility to upgrade.</p>
                                <ul>
                                    <li>Terms from 24 to 48 months</li>
                                    <li>Lower monthly payments</li>
                                    <li>Upgrade to the latest models regularly</li>
                                    <li>Comprehensive warranty coverage</li>
                                    <li>Multiple end-of-lease options</li>
                                </ul>
                                <p className="ideal-for">Ideal for: Those who enjoy driving the latest models</p>
                            </div>
                        </div>
                        
                        <div className="option-card">
                            <div className="card-header">
                                <i className="fas fa-dollar-sign"></i>
                                <h3>Balloon Financing</h3>
                            </div>
                            <div className="card-content">
                                <p>Enjoy lower monthly payments with a larger final payment at the end of the term.</p>
                                <ul>
                                    <li>Reduced monthly payments</li>
                                    <li>Flexible end-of-term options</li>
                                    <li>Balance between leasing and financing</li>
                                    <li>Refinance options for final payment</li>
                                    <li>Ideal for preserving cash flow</li>
                                </ul>
                                <p className="ideal-for">Ideal for: Business professionals, investors</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="calculator-section">
                    <h2>Financing Calculator</h2>
                    <p>Estimate your monthly payments based on your preferences and credit profile.</p>
                    
                    <div className="calculator-container">
                        <form className="calculator-form" onSubmit={calculatePayment}>
                            <div className="form-group">
                                <label htmlFor="vehicle">Vehicle of Interest</label>
                                <input
                                    type="text"
                                    id="vehicle"
                                    name="vehicle"
                                    placeholder="e.g., Audi R8, Mercedes G-Wagon"
                                    value={formData.vehicle}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="price">Vehicle Price (€)</label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        placeholder="e.g., 85000"
                                        min="1"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="downPayment">Down Payment (€)</label>
                                    <input
                                        type="number"
                                        id="downPayment"
                                        name="downPayment"
                                        placeholder="e.g., 20000"
                                        min="0"
                                        value={formData.downPayment}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="creditScore">Credit Score Range</label>
                                    <select
                                        id="creditScore"
                                        name="creditScore"
                                        value={formData.creditScore}
                                        onChange={handleInputChange}
                                    >
                                        <option value="excellent">Excellent (750+)</option>
                                        <option value="good">Good (700-749)</option>
                                        <option value="fair">Fair (650-699)</option>
                                        <option value="poor">Below 650</option>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="term">Loan Term (Months)</label>
                                    <select
                                        id="term"
                                        name="term"
                                        value={formData.term}
                                        onChange={handleInputChange}
                                    >
                                        <option value="24">24 months</option>
                                        <option value="36">36 months</option>
                                        <option value="48">48 months</option>
                                        <option value="60">60 months</option>
                                        <option value="72">72 months</option>
                                        <option value="84">84 months</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="contact-details">
                                <h4>Your Contact Information</h4>
                                
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Your phone number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <button type="submit" className="calculate-button">
                                <i className="fas fa-calculator"></i> Calculate Payment
                            </button>
                        </form>
                        
                        {showResults && (
                            <div className="calculator-results" id="financing-results">
                                <h3>Your Estimated Payment</h3>
                                <div className="results-container">
                                    <div className="result-item main">
                                        <span className="result-label">Monthly Payment</span>
                                        <span className="result-value">€{results.monthlyPayment}</span>
                                    </div>
                                    
                                    <div className="result-details">
                                        <div className="result-item">
                                            <span className="result-label">Interest Rate</span>
                                            <span className="result-value">{results.interestRate}%</span>
                                        </div>
                                        
                                        <div className="result-item">
                                            <span className="result-label">Term Length</span>
                                            <span className="result-value">{formData.term} months</span>
                                        </div>
                                        
                                        <div className="result-item">
                                            <span className="result-label">Total Interest</span>
                                            <span className="result-value">€{results.totalInterest}</span>
                                        </div>
                                        
                                        <div className="result-item">
                                            <span className="result-label">Total Payment</span>
                                            <span className="result-value">€{results.totalPayment}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="result-disclaimer">
                                        <p>This is an estimate only. Contact our financing specialists for a personalized quote.</p>
                                    </div>
                                    
                                    <a href="#contact-financing" className="contact-button">
                                        <i className="fas fa-comment-dollar"></i> Speak to a Finance Specialist
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="financing-faq">
                    <h2>Frequently Asked Questions</h2>
                    
                    <div className="faq-container">
                        <div className="faq-item">
                            <h3>What's the difference between leasing and financing?</h3>
                            <p>Financing means you're purchasing the vehicle and building equity with each payment, eventually owning it outright. Leasing allows you to drive a new vehicle for a specified term with typically lower monthly payments, but you return the vehicle at the end of the lease term.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Do you offer financing for international clients?</h3>
                            <p>Yes, we offer specialized financing solutions for international clients through our global banking partners. Additional documentation may be required, and our international finance team will guide you through the process.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Can I refinance my current luxury vehicle with you?</h3>
                            <p>Yes, we offer competitive refinancing options that may lower your current payment or help you access equity in your vehicle. Our financing specialists can analyze your current terms and suggest beneficial alternatives.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>What credit score do I need to qualify for your best rates?</h3>
                            <p>Our most competitive rates typically require a credit score of 750 or higher. However, we work with clients across the credit spectrum and have financing solutions available for various credit profiles.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Can I pay off my financing early without penalties?</h3>
                            <p>Most of our financing options allow for early payoff without prepayment penalties. However, specific terms may vary by lender. Our team will clearly disclose all terms before you sign any agreements.</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-section" id="contact-financing">
                    <h2>Speak with a Financing Specialist</h2>
                    <p>Our team of finance professionals is ready to create a customized solution that meets your specific needs.</p>
                    
                    <div className="finance-team">
                        <div className="finance-expert">
                            <div className="expert-image">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Anderson" />
                            </div>
                            <h3>Michael Anderson</h3>
                            <p className="expert-title">Senior Finance Manager</p>
                            <p className="expert-contact"><i className="fas fa-phone"></i> +31 6 1234 5678</p>
                            <p className="expert-contact"><i className="fas fa-envelope"></i> m.anderson@luxuryautos.com</p>
                        </div>
                        
                        <div className="finance-expert">
                            <div className="expert-image">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sophia Martinez" />
                            </div>
                            <h3>Sophia Martinez</h3>
                            <p className="expert-title">Lease Specialist</p>
                            <p className="expert-contact"><i className="fas fa-phone"></i> +31 6 1234 5679</p>
                            <p className="expert-contact"><i className="fas fa-envelope"></i> s.martinez@luxuryautos.com</p>
                        </div>
                        
                        <div className="finance-expert">
                            <div className="expert-image">
                                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="James Wilson" />
                            </div>
                            <h3>James Wilson</h3>
                            <p className="expert-title">International Finance Coordinator</p>
                            <p className="expert-contact"><i className="fas fa-phone"></i> +31 6 1234 5680</p>
                            <p className="expert-contact"><i className="fas fa-envelope"></i> j.wilson@luxuryautos.com</p>
                        </div>
                    </div>
                    
                    <div className="financing-cta">
                        <h3>Ready to move forward with financing?</h3>
                        <p>Schedule a consultation with our team to discuss your options in detail.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="cta-button primary">Schedule Consultation</a>
                            <a href="/inventory" className="cta-button secondary">Browse Vehicles</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Financing;