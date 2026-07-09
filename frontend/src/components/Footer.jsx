import '../styles/Footer.css'
import SiteInput from './SiteInput';
import { Link } from 'react-router-dom';

import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Footer () {

    return (
        <footer>
            <div className="footer-container">
                <Link className='footer-logo'>
                    <img src="/logo.png" alt="The official Techadome logo" />
                </Link>
                <ul className='footer-nav'>
                    <Link className='social-link'>
                        <FaFacebookSquare />
                    </Link>
                    <Link className='social-link'>
                        <FaInstagramSquare />
                    </Link>
                    <Link className='social-link'>
                        <FaLinkedin /> 
                    </Link>
                    <Link className='social-link'>
                        <AiFillTikTok />
                    </Link>
                </ul>
                <p className='date'>© Techadome Technologies {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;