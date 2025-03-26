import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => {
                setVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setVisible(false);
    };

    const toggleDetails = () => {
        setExpanded(!expanded);
    };

    if (!visible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-content">
                <div className="cookie-icon">
                    <i className="fas fa-cookie-bite"></i>
                </div>
                <div className="cookie-text">
                    <h3>We Value Your Privacy</h3>
                    <p>
                        Luxury Autos uses cookies to enhance your browsing experience, personalize content and ads,
                        analyze our traffic, and remember your preferences. By clicking "Accept All", you consent
                        to our use of cookies as described in our <Link to="/privacy-policy" className="policy-link">Privacy Policy</Link>.
                    </p>

                    {expanded && (
                        <div className="cookie-details">
                            <h4>How We Use Cookies</h4>
                            <p>
                                We use different types of cookies for various purposes:
                            </p>
                            <ul>
                                <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                                <li><strong>Analytical cookies:</strong> Help us understand how users interact with our website</li>
                                <li><strong>Advertising cookies:</strong> Used to deliver relevant ads to you</li>
                            </ul>
                            <div className="policy-links">
                                <p>For more information, please review:</p>
                                <div className="policy-links-container">
                                    <Link to="/privacy-policy" className="policy-link">
                                        <i className="fas fa-shield-alt"></i> Privacy Policy
                                    </Link>
                                    <Link to="/terms-of-service" className="policy-link">
                                        <i className="fas fa-file-contract"></i> Terms of Service
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                    <button className="cookie-button details" onClick={toggleDetails}>
                        {expanded ? 'Hide Details' : 'Show Details'}
                    </button>
                </div>
                <div className="cookie-buttons">
                    <button className="cookie-button decline" onClick={declineCookies}>
                        Decline
                    </button>
                    <button className="cookie-button accept" onClick={acceptCookies}>
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;