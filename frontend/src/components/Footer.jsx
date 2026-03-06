import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer () {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-contact">
                    <h2>
                        Turning it <span>on and off</span><br></br>won't cut it this time.
                    </h2>
                    <div className="footer-form">
                        <input 
                            type="email"
                            placeholder='Email Address'
                        />
                        <button>
                            Get a quote
                        </button>
                    </div>
                </div>
                <ul className='footer-nav'>
                    <Link className='nav-link'>Home</Link>
                    <Link className='nav-link'>Services</Link>
                    <Link className='nav-link'>About Us</Link>
                    <Link className='nav-link'>Partners</Link>
                    <Link className='nav-link'>Contact</Link>
                </ul>
            </div>
            
            <div className="footer-footnotes">
                <Link className='footer-logo'>
                    <img src="/logo.png" alt="The official Techadome logo" />
                </Link>

                <p className='date'>© Techadome Technologies {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;