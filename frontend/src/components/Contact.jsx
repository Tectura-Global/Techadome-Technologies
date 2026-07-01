import { useState } from 'react';
import api from '../api/api';
import '../styles/contact.css'

function Contact() {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            
            await api.post('/api/contact/', formData);

            alert('Message sent.');

            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: '',
            });

        } catch (err) {
            console.error(err);
            alert('Failed to send message.');
        }

        setLoading(false);
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <h1 className='main site-heading'>
                    Reach Out
                </h1>
                <form onSubmit={handleSubmit} id="contact-form">

                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                    />

                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                    />

                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company"
                    />

                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Please select --</option>
                        <option value="web-development">Web Development</option>
                        <option value="graphic-design">Graphic Design</option>
                    </select>

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your project..."
                    />

                    <button type="submit" disabled={loading} className='form-submit'>
                        {loading ? 'sending...' : 'send'}
                    </button>

                </form>
            </div>
            <div className="contact-info">
                <div className="contact-block">
                    <h2 className="site-heading">Come Stop By</h2>
                    <ul className="address contact-list">
                        <li>164 Katherine Street</li>
                        <li>Barlow Park, Sandton</li>
                        <li>Johannesburg</li>
                        <li>2148</li>
                    </ul>
                </div>
                <div className="contact-block">
                    <h2 className="site-heading">Get in touch</h2>
                    <ul className="e-info contact-list">
                        <li>+27 11 568 7971</li>
                        <li>contact@techadometechnologies.com</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;