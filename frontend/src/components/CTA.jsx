import '../styles/CTA.css'
import { PiNetworkFill } from "react-icons/pi";
import { AiOutlineCloudServer } from "react-icons/ai";
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
                            Security Solutions, <span>business never has to wait.</span>
                        </p>
                        <button className="site-btn">
                            Book a Call
                        </button>
                    </div>
                </div>
            </div>
            <div className="cta-extension">
                <div className="cta-card">
                    <PiNetworkFill className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title">
                            Polymorphic Network Infrastracture
                        </h3>
                        <p className="cta-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet molestiae, quibusdam et earum excepturi repellat.
                        </p>
                    </div>
                </div>
                <div className="cta-card">
                    <AiOutlineCloudServer className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title">
                            Synchronized Cloud Architecture
                        </h3>
                        <p className="cta-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet molestiae, quibusdam et earum excepturi repellat.
                        </p>
                    </div>
                </div>
                <div className="cta-card">
                    <HiShieldCheck className='cta-card-icon' />
                    <div className="cta-content">
                        <h3 className="cta-title">
                            Industry-Grade Cybersecurity
                        </h3>
                        <p className="cta-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet molestiae, quibusdam et earum excepturi repellat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;