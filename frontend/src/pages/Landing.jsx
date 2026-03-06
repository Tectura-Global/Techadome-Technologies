import '../styles/Landing.css'

import SiteInput from '../components/SiteInput';
import Nav from '../components/Nav';
import { useEffect, useRef } from "react";

function Landing () {
    
    const mainRef = useRef()
    
    useEffect(() => { 
        
        document.title = `Techadome Technologies`      
        const rootElement = mainRef?.current.parentElement;

        if (rootElement) {
            rootElement.classList.add('landing')
        }

    }, []);

    return (
        <main id="landing" ref={mainRef}>
            <header>
                <div className="header-container">
                    <Nav />
                    <div className="header-content">
                        <h1 className="site-heading">
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
                </div>
            </header>
        </main>
    )
}

export default Landing;