import '../styles/Landing.css'

import CTA from '../components/CTA';
import Team from '../components/Team';
import Marquee from "react-fast-marquee";
import SiteInput from '../components/SiteInput';
import { useEffect, useRef } from "react";
import Meetings from '../components/Meetings';

function Landing () {
    
    const mainRef = useRef()
    
    useEffect(() => { 
        
        document.title = `Techadome Technologies`      
        const rootElement = mainRef?.current.parentElement.parentElement;

        if (rootElement) {
            rootElement.classList.add('landing')
        }

    }, []);

    return (
    <>
        <header ref={mainRef}>
            <div className="header-container">
                <div className="header-content">
                    <h1 className="site-heading animate__animated animate__fadeInUp">
                        The IT Department<br></br>
                        that <span>Never Sleeps</span>
                    </h1>
                    <p className="site-p animate__animated animate__fadeInUp">
                        An entire floor of expertly-trained 
                        Developers and Technicians
                        <span> at your beck and call</span>
                    </p>
                    <SiteInput classTitle={'header-form animate__animated animate__fadeInUp'}/>
                </div>
                <Marquee className='header-marquee' autoFill={true} pauseOnHover={true}>
                    <img src="/partners/amazon.svg" alt="" className="partner-logo" />
                    <img src="/partners/adobe.svg" alt="" className="partner-logo" />
                    <img src="/partners/google.svg" alt="" className="partner-logo" />
                    <img src="/partners/spotify.svg" alt="" className="partner-logo" />
                    <img src="/partners/facebook.svg" alt="" className="partner-logo" />
                </Marquee>
            </div>
        </header>
        <CTA />
        <Meetings />
        <Team />
    </>)
}

export default Landing;