import '../styles/CTA.css'
import images from '../imports/images';

function CTA () {

    return (
        <section id="cta">
            <div className="cta-container">
                <div className="cta-header">
                    <span className='site-title'>Why Us?</span>
                    <h2 className='site-heading'>
                        <span className='animated'>
                            Your business only runs as
                            smooth as <span className='color'>your system</span> does.
                        </span>
                    </h2>
                    <p className="site-p">
                        With Techadome Technologies' around-the-clock 
                        Technical Support and intuitive Software and 
                        Security Solutions, <span>business never has to wait.</span>
                    </p>
                    <button className="site-btn">
                        Book a Call
                    </button>
                </div>
                <div className="cta-cards">
                    <div className="cta-card">
                        <p className="site-p cta-card-title">
                            24/7 System Security
                        </p>
                    </div>
                    <div className="cta-card">
                        <p className="site-p cta-card-title">
                            Revised Network Architecture
                        </p>
                    </div>
                    <div className="cta-card">
                        <p className="site-p cta-card-title">
                            Cybersecurity Monitoring
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;