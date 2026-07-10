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
                    <a className='social-link' href='https://www.facebook.com/profile.php?id=61581128096130' target="_blank">
                        <FaFacebookSquare />
                    </a>
                    <a className='social-link' href={'https://www.instagram.com/techadome_tech/'} target="_blank">
                        <FaInstagramSquare />
                    </a>
                    <a className='social-link' href={'https://www.linkedin.com/company/techadome-technologies/'} target="_blank">
                        <FaLinkedin />
                    </a>
                </ul>
                <p className='date'>© Techadome Technologies {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;