import '../styles/CTA.css'
import { SiGitconnected } from "react-icons/si";
import { BsBuildingGear } from "react-icons/bs";
import { HiShieldCheck } from "react-icons/hi2";
import images from '../imports/images';

function CTA () {

    return (
        <section id="cta">
            <div className="cta-container">
                <div className="cta-header">
                    <h2 className='site-heading'>
                        <span className='animated'>
                            Your business only runs
                            as smooth as <span className='color'>your system</span>
                        </span>
                    </h2>
                    <div className='content'>
                        <p className="site-p">
                            With Techadome Technologies' around-the-clock 
                            Technical Support and intuitive Software and 
                            Security Solutions, <br></br><span>business never has to wait.</span>
                        </p>
                        <a className="site-btn" href='https://outlook.office.com/book/TechadomeTechnologies@tecturaglobal.com/'>
                            Book a Call
                        </a>
                    </div>
                </div>
            </div>
            <div className="cta-extension">
                <div className="cta-card">
                    <HiShieldCheck className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title">
                            Security-First
                        </h3>
                        <p className="cta-text">
                            From managed firewalls to advanced threat protection, we protect what matters most.
                        </p>
                    </div>
                </div>
                <div className="cta-card">
                    <BsBuildingGear className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title">
                            Built Into The Building
                        </h3>
                        <p className="cta-text">
                            We're embedded in the construction process from day one, not bolted on after.
                        </p>
                    </div>
                </div>
                <div className="cta-card">
                    <SiGitconnected className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title">
                            Always-On Connectivity
                        </h3>
                        <p className="cta-text">
                            SD-WAN, NOC-as-a-Service, and enterprise networking keep your business running
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;