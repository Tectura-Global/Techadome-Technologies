import '../styles/Landing.css'

import Nav from '../components/Nav';
import CTA from '../components/CTA';
import Team from '../components/Team';
import Marquee from "react-fast-marquee";
import SiteInput from '../components/SiteInput';
import { useEffect, useRef } from "react";
import Contact from '../components/Contact';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import Meetings from '../components/Meetings';
import { Helmet } from 'react-helmet-async';


function Landing () {
    
    const mainRef = useRef()
    
    useEffect(() => { 
         
        const rootElement = mainRef?.current.parentElement.parentElement;

        if (rootElement) {
            rootElement.classList.add('landing')
        }

    }, []);

    return (
    <>
        <Helmet>
            <title>Techadome Technologies | Professional Software Company</title>

            <meta
                name="description"
                content="Custom web development, branding, and digital solutions for modern businesses."
            />

            <meta
                name="keywords"
                content="IT, IT Services, web development, software, branding, SEO, Johannesburg"
            />

            <meta property="og:title" content="Techadome Technologies" />

            <meta
                property="og:description"
                content="Professional digital solutions"
            />

            <meta property="og:type" content="website" />

            <meta property="og:url" content="https://techadometechnologies.com" />

            <meta
                property="og:image"
                content="https://yourdomain.com/og-image.jpg"
            />
            <link
                rel="canonical"
                href="https://techadometechnologies.com/"
            />
        </Helmet>
        <Nav />
        <header ref={mainRef} id='hero'>
            <div className="header-container">
                <div className="header-content">
                    <h1 className="site-heading animate__animated animate__fadeInUp">
                        Where <span>Every Second
                        <br /></span>of Uptime Matters.
                    </h1>
                    <p className="site-p animate__animated animate__fadeInUp">
                        Delivering Always-On Connectivity, Security, and Support—24/7, 365.
                    </p>
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
        <Welcome />
        <Meetings />
        <Services />
        <CTA />
        <Team />
    </>)
}

export default Landing;