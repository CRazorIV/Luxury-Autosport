import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page-container">
            <h1>Privacy Policy</h1>
            <div className="legal-content">
                <section className="legal-section">
                    <h2>1. Introduction</h2>
                    <p>At Luxury Autos, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                </section>

                <section className="legal-section">
                    <h2>2. Information We Collect</h2>
                    <h3>Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide when interacting with our website, including:</p>
                    <ul>
                        <li>Contact information (name, email address, phone number, mailing address)</li>
                        <li>Account credentials (username and password)</li>
                        <li>Financial information (for vehicle financing applications)</li>
                        <li>Vehicle preferences and search criteria</li>
                        <li>Demographic information</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <p>When you visit our website, we may automatically collect certain information about your device and usage, including:</p>
                    <ul>
                        <li>IP address and browser type</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring websites</li>
                        <li>Device identifiers</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. How We Use Your Information</h2>
                    <p>We may use the information we collect for various purposes, including:</p>
                    <ul>
                        <li>Providing and maintaining our services</li>
                        <li>Processing vehicle inquiries and purchases</li>
                        <li>Communicating with you about our products and services</li>
                        <li>Personalizing your experience and delivering relevant content</li>
                        <li>Improving our website and services</li>
                        <li>Conducting analysis and research to enhance user experience</li>
                        <li>Detecting, preventing, and addressing technical or security issues</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                </section>

                <section className="legal-section">
                    <h2>5. Third-Party Disclosure</h2>
                    <p>We may share your information with:</p>
                    <ul>
                        <li>Service providers who perform services on our behalf</li>
                        <li>Financial institutions for financing applications</li>
                        <li>Business partners for co-branded products or services</li>
                        <li>Law enforcement agencies when required by law</li>
                    </ul>
                    <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties for marketing purposes without your consent.</p>
                </section>

                <section className="legal-section">
                    <h2>6. Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </section>

                <section className="legal-section">
                    <h2>7. Your Rights</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <ul>
                        <li>Access to your personal data</li>
                        <li>Correction of inaccurate data</li>
                        <li>Deletion of your data</li>
                        <li>Restriction of processing</li>
                        <li>Data portability</li>
                        <li>Objection to processing</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information provided in Section 10.</p>
                </section>

                <section className="legal-section">
                    <h2>8. Children's Privacy</h2>
                    <p>Our website is not intended for children under 16 years of age, and we do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete that information.</p>
                </section>

                <section className="legal-section">
                    <h2>9. Changes to This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
                </section>

                <section className="legal-section">
                    <h2>10. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p>Luxury Autos<br />
                        123 Prestige Avenue<br />
                        Beverly Hills, CA 90210<br />
                        Email: privacy@luxuryautos.com<br />
                        Phone: +1 (800) LUXE-AUTO</p>
                </section>

                <p className="legal-last-updated">Last Updated: March 26, 2025</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;