import '../styles/Nav.css'

import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

export default function Nav() {

    return (
        <nav>
            <Link className='nav-logo'>
                <img src="/logo.png" alt="The Official Techadome logo" />
            </Link>
            <ul>
                <NavLink>Home</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>About Us</NavLink>
                <NavLink>Partners</NavLink>
                <NavLink>Contact</NavLink>
            </ul>
            <button className="menu-toggle">
                <IoMenuSharp />
            </button>
        </nav>
    )
}