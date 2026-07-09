import '../styles/Nav.css'

import { Link, Links, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoMenuSharp } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { IoHardwareChipOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdSignalWifi4BarLock } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Nav() {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNav = () => {
        
    }

    return (
        <nav>
            <Link className='nav-logo animate__animated animate__fadeInLeft'>
                <img src="/logo.png" alt="The Official Techadome logo" />
            </Link>
            <ul className="animate__animated animate__fadeIn">
                <HashLink className="nav-link" to={'/#hero'}>
                    Home
                </HashLink>

                <HashLink className="nav-link" to={"/#welcome"}>
                    About Us
                </HashLink>

                <HashLink className="nav-link has-subnav" to={"/#services"}>
                    Our Services
                    {/* subnav */}
                </HashLink>
            </ul>
            <button className="menu-toggle animate__animated animate__fadeInUp" onClick={handleShow}>
                <IoMenuSharp />
            </button>
            <div className="nav-actions animate__animated animate__fadeInRight">
                <Link to={'/contact'} className='nav-action site-btn primary'>
                    Contact Us
                </Link>
            </div>
            <Offcanvas id="responsive-nav" show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <Link className='nav-logo animate__animated animate__fadeInLeft'>
                            <img src="/logo - black.png" alt="The Official Techadome logo" />
                        </Link>
                    </Offcanvas.Title>
                    <button onClick={handleClose}>close</button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='animate__animated animate__fadeIn'>
                        <HashLink className="nav-link" to={'/#hero'}>
                            Home
                        </HashLink>

                        <HashLink className="nav-link" to={"/#welcome"}>
                            About Us
                        </HashLink>

                        <HashLink className="nav-link has-subnav" to={"/#services"}>
                            Our Services
                            {/* subnav */}
                        </HashLink>

                        <div className="nav-actions animate__animated animate__fadeInRight">
                            <Link to={'/contact'} className='nav-action site-btn primary'>
                                Contact Us
                            </Link>
                        </div>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    )
}