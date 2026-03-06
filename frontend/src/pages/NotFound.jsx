import '../styles/NotFound.css'
import { useEffect, useRef } from "react";

export default function NotFound() {

    const mainRef = useRef()

    useEffect(() => { 
        document.title = `Not Found | Techadome Technologies`

        const rootElement = mainRef?.current.parentElement;

        if (rootElement) {
            rootElement.classList.add('not-found')
        }

    }, []);

    return (
        <main id='not-found' ref={mainRef}>
            {/* <div className="content">
                <h1 className='site-heading'>You might<br></br>be <span>lost</span></h1>
                <p className='site-p'>The URL you're trying to access does not exist.</p>
            </div> */}
        </main>
    )
}