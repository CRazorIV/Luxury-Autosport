const Contact = () => {
    return (
        <div className="page-container">
            <h1>Contact</h1>
            <p>Reach out to us using the form below or call us directly.</p>
            <form className="contact-form">
                <label>Name:</label>
                <input type="text" placeholder="Your name" />

                <label>Email:</label>
                <input type="email" placeholder="Your email" />

                <label>Message:</label>
                <textarea placeholder="Type your message here..."></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
