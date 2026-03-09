import '../styles/Nav.css'

import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

export default function Nav() {

    return (
        <nav>
            <Link className='nav-logo animate__animated animate__fadeInLeft'>
                <img src="/logo.png" alt="The Official Techadome logo" />
            </Link>
            <ul>
                <NavLink className={'nav-link'}>Home</NavLink>
                <NavLink className={'nav-link'}>Services</NavLink>
                <NavLink className={'nav-link'}>About Us</NavLink>
                <NavLink className={'nav-link'}>Partners</NavLink>
                <NavLink className={'nav-link'}>Contact</NavLink>
            </ul>
            <button className="menu-toggle animate__animated animate__fadeInUp">
                <IoMenuSharp />
            </button>
            <div className="nav-actions animate__animated animate__fadeInRight">
                <button className='nav-action site-btn quote'>
                    Get a Quote
                </button>
            </div>
        </nav>
    )
}