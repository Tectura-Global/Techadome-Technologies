import '../styles/contact.css'

function Contact () {

    return (
        <section id="contact">
            <div className="contact-container">
                <h2 className="site-heading">
                    Contact
                </h2>
                <div className="contact-content">
                    <p className="site-p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Fugit doloremque earum voluptatem ratione, natus ipsum eum
                    </p>
                    <form action="/submit" method="post" id='contact-form'>
                        <div className="form-block">
                            <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="First name"
                            required
                            aria-label="First Name"
                            />
                        </div>

                        <div className="form-block">
                            <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Last name"
                            required
                            aria-label="Last Name"
                            />
                        </div>

                        <div className="form-block">
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                            aria-label="Email address"
                            />
                        </div>

                        <div className="form-block">
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+27 82 123 4567"
                            aria-label="Phone number"
                            />
                        </div>

                        <div className="form-block">
                            <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your company (optional)"
                            aria-label="Company name"
                            />
                        </div>

                        <div className="form-block">
                            <select
                                id="service"
                                name="service"
                                required
                                aria-label="Service required"
                                >
                                <option value="">-- Please select --</option>
                                <option value="web-development">Web Development</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="seo">SEO / Search Engine Optimization</option>
                                <option value="branding">Branding & Identity</option>
                                <option value="content-creation">Content Creation</option>
                                <option value="consulting">Consulting</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-block">
                            <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder="Tell us about your project, goals, timeline, budget, etc..."
                            aria-label="Extra Message"
                            />
                        </div>

                        <div className="form-block submit">
                            <button type="submit" className='form-submit'>send</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;