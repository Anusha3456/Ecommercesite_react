import './contact.css'
export default function Contact() {
    return (
        <div>


            <div className="contact-container">
                <h1>Contact Us</h1>
                <p className="intro">
                    We’d love to hear from you! Fill out the form or reach us via the details below.
                </p>

                <div className="contact-content">
                    {/* Contact Form */}
                    <form className="contact-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Your Name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="you@example.com" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>

                        <button type="submit">Send Message</button>
                    </form>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Reach Us</h2>
                        <p><strong>Email:</strong> contact@yourdomain.com</p>
                        <p><strong>Phone:</strong> +123 456 789</p>
                        <p><strong>Address:</strong> 123 Street, City, Country</p>

                        <div className="social-links">
                            <a href="#">🌐 Facebook</a>
                            <a href="#">💼 LinkedIn</a>
                            <a href="#">📸 Instagram</a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}