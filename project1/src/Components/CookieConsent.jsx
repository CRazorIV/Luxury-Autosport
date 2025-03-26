import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

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
                        to our use of cookies as described in our Cookie Policy.
                    </p>
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