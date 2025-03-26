const Contact = () => {
    return (
        <div className="page-container">
            <h1>Contact</h1>
            <p>Neem contact met ons op via onderstaand formulier of bel ons.</p>
            <form className="contact-form">
                <label>Naam:</label>
                <input type="text" placeholder="Jouw naam" />

                <label>Email:</label>
                <input type="email" placeholder="Jouw e-mail" />

                <label>Bericht:</label>
                <textarea placeholder="Typ je bericht hier..."></textarea>

                <button type="submit">Verzenden</button>
            </form>
        </div>
    );
};

export default Contact;
