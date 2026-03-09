import '../styles/Landing.css'

import SiteInput from '../components/SiteInput';
import Nav from '../components/Nav';
import { useEffect, useRef } from "react";

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
                <h1 className="site-heading animate__animated animate__fadeInUp">
                    The IT Department<br></br>
                    that <span>Never Sleeps</span>
                </h1>
                <p className="site-p">
                    An entire floor of expertly-trained 
                    Developers, Designers and Technicians
                    <span> at your beck and call</span>
                </p>
                <SiteInput classTitle={'header-form'}/>
            </div>
        </header>
    </>)
}

export default Landing;