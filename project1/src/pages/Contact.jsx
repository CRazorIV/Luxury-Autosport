import { useState, useEffect, useRef } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCalendarAlt, FaCar } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        appointmentDate: "",
        appointmentTime: "",
        preferredVehicle: "",
        testDrive: false
    });
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    
    // Get tomorrow's date in YYYY-MM-DD format for min date attribute
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    
    // Get date 3 months from now for max date
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateString = maxDate.toISOString().split('T')[0];

    // Effect to scroll to top when form is submitted
    useEffect(() => {
        if (submitted) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [submitted]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send the data to your backend here
        console.log("Form submitted:", formData);
        setSubmitted(true);
        
        // Scroll to top of page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                appointmentDate: "",
                appointmentTime: "",
                preferredVehicle: "",
                testDrive: false
            });
            setSubmitted(false);
        }, 4000); // Extended slightly to allow for smooth scrolling
    };

    return (
        <div className="contact-page-container" ref={formRef}>
            <h1>Schedule an Appointment</h1>
            
            <div className="contact-main">
                <div className="contact-form-container full-width">
                    <h2>Book Your Appointment</h2>
                    {submitted ? (
                        <div className="form-success-message">
                            <h3>Thank you for scheduling an appointment!</h3>
                            <p>We've received your request for {formData.appointmentDate} at {formData.appointmentTime}.</p>
                            <p>A confirmation email has been sent to {formData.email}.</p>
                            <p>One of our representatives will contact you shortly to confirm your appointment details.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-section">
                                <h3 className="form-section-title">
                                    <span className="form-section-icon"><FaUser /></span>
                                    Personal Information
                                </h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name*</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            placeholder="Your full name" 
                                            required 
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address*</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            placeholder="Your email address" 
                                            required 
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number*</label>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            name="phone" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                            placeholder="Your phone number" 
                                            required
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="subject">Purpose of Visit*</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select purpose</option>
                                            <option value="Test Drive">Test Drive</option>
                                            <option value="Vehicle Purchase">Vehicle Purchase</option>
                                            <option value="Service Appointment">Service Appointment</option>
                                            <option value="Financing Consultation">Financing Consultation</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h3 className="form-section-title">
                                    <span className="form-section-icon"><FaCalendarAlt /></span>
                                    Appointment Details
                                </h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="appointmentDate">Preferred Date*</label>
                                        <div className="date-input-container">
                                            <input 
                                                type="date" 
                                                id="appointmentDate" 
                                                name="appointmentDate" 
                                                value={formData.appointmentDate} 
                                                onChange={handleChange} 
                                                min={minDate}
                                                max={maxDateString}
                                                required 
                                            />
                                            <span className="calendar-icon"><FaCalendarAlt /></span>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="appointmentTime">Preferred Time*</label>
                                        <select
                                            id="appointmentTime"
                                            name="appointmentTime"
                                            value={formData.appointmentTime}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select time</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="1:00 PM">1:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                            <option value="6:00 PM">6:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h3 className="form-section-title">
                                    <span className="form-section-icon"><FaCar /></span>
                                    Vehicle Information
                                </h3>
                                <div className="form-group">
                                    <label htmlFor="preferredVehicle">Preferred Vehicle (Optional)</label>
                                    <input 
                                        type="text" 
                                        id="preferredVehicle" 
                                        name="preferredVehicle" 
                                        value={formData.preferredVehicle} 
                                        onChange={handleChange} 
                                        placeholder="e.g., BMW 7 Series, Mercedes S-Class, etc." 
                                    />
                                </div>
                                
                                <div className="form-group checkbox-group">
                                    <input 
                                        type="checkbox" 
                                        id="testDrive" 
                                        name="testDrive" 
                                        checked={formData.testDrive} 
                                        onChange={handleChange} 
                                    />
                                    <label htmlFor="testDrive">I'm interested in a test drive</label>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Additional Comments</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    placeholder="Please share any additional information that would help us prepare for your visit..." 
                                    rows="4"
                                ></textarea>
                            </div>
                            
                            <div className="privacy-consent">
                                <input 
                                    type="checkbox" 
                                    id="privacy" 
                                    required 
                                />
                                <label htmlFor="privacy">I agree to the <a href="#">privacy policy</a> and consent to the processing of my personal data</label>
                            </div>
                            
                            <button type="submit" className="submit-button">Schedule Appointment</button>
                        </form>
                    )}
                </div>
            </div>
            
            <div className="contact-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52861.03307359473!2d-118.42414024565833!3d34.08311301799177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1711708462849!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </div>
    );
};

// Make sure to add this icon that was missing in import statement
const FaUser = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
    </svg>
);

export default Contact;
