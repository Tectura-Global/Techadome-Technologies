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
                        <span>Founded in 2026 and based in Sandton, Johannesburg</span>, Techadome Technologies 
                        was established with a vision to deliver innovative, reliable, and 
                        future-focused technology solutions.
                        {/* <br/><br/>
                        Today, we partner with organizations 
                        across industries, helping them navigate digital transformation with confidence 
                        through expert guidance, tailored strategies, and world-class support. 
                        Inspired by industry leaders like Techadome Technologies, we combine technical 
                        expertise with a client-first approach to deliver measurable business value. */}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Welcome;