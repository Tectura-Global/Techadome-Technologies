import '../styles/welcome.css'
import images from "../imports/images";

function Welcome () {

    return (
        <section id="welcome">
            <div className="welcome-container">
                <img src={images.welcome} alt="" className="welcome-img" />
                <div className="welcome-content">
                    <h2 className='site-heading'>
                        Welcome to <br />
                        <span className="blue">Techadome</span>
                        <span className="purple">Technologies</span>
                    </h2>
                    <p className="site-p">
                        We build the technology backbone that modern businesses rely on. 
                        From secure networks and cloud platforms to intelligent infrastructure 
                        and cybersecurity, we design solutions that keep your business connected, 
                        protected, and ready for what's next.
                        <br/><br/>
                        Born from a partnership with Tectura Global, one of South Africa's leading 
                        architectural and project management firms, Techadome sits at the intersection 
                        of the physical and digital worlds. We design, deploy, and manage the technology 
                        layer inside the buildings Tectura creates. That gives us a unique advantage: 
                        we're part of the conversation before a building opens its doors.
                        {/* <br/><br/>
                        Today, we partner with organizations 
                        across industries, helping them navigate digital transformation with confidence 
                        through expert guidance, tailored strategies, and world-class support. 
                        Inspired by industry leaders like Techadome Technologies, we combine technical 
                        expertise with a client-first approach to deliver measurable business value. */}
                    </p>
                </div>
                <div className="mission">
                        <div className="value-block">
                            <h2 className="site-heading">
                                <span>
                                    <svg width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="107.5" cy="107.5" r="107.5" fill="#8A11C6"/>
                                        <circle cx="155.278" cy="59.7221" r="19.9074" fill="white" fill-opacity="0.45"/>
                                    </svg>
                                </span>
                                Our Vision
                            </h2>
                            <p className="site-p">
                                "To be South Africa's most trusted smart infrastructure 
                                partner where every building we touch is secure, connected, 
                                and ready for the future."
                            </p>
                        </div>
                        <div className="value-block">
                            <h2 className="site-heading">
                                <span>
                                    <svg width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="107.5" cy="107.5" r="107.5" fill="#8A11C6"/>
                                        <circle cx="155.278" cy="59.7221" r="19.9074" fill="white" fill-opacity="0.45"/>
                                    </svg>
                                </span>
                                Our Mission
                            </h2>
                            <p className="site-p">
                                To deliver enterprise-grade network, security, and cloud solutions 
                                to businesses of all sizes across South Africa, with the depth of 
                                technical skill usually reserved for large corporates, and the 
                                agility of a partner that knows your business by name.
                            </p>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome;