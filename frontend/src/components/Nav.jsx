import '../styles/Nav.css'

import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Nav() {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <nav>
            <Link className='nav-logo animate__animated animate__fadeInLeft'>
                <img src="/logo.png" alt="The Official Techadome logo" />
            </Link>
            <ul className=' animate__animated animate__fadeIn'>
                <NavLink className={'nav-link'}>Home</NavLink>
                <NavLink className={'nav-link'}>About Us</NavLink>
                <NavLink className={'nav-link has-subnav'}>
                    Services
                    <ul className='subnav'>
                        <h5 className='site-p'>Our Services</h5>
                        <NavLink className={'subnav-item animate__animated animate__fadeInLeft'}>
                            <span className='subnav-icon'>
                                <IoCode />
                            </span>
                            Software Solutions
                        </NavLink>
                        <NavLink className={'subnav-item animate__animated animate__fadeInLeft'}>
                            <span className='subnav-icon'>
                                <IoHardwareChipOutline />
                            </span>
                            Hardware Solutions
                        </NavLink>
                        <NavLink className={'subnav-item animate__animated animate__fadeInLeft'}>
                            <span className='subnav-icon'>
                                <FaServer />
                            </span>
                            Server Solutions
                        </NavLink>
                    </ul>
                </NavLink>
                <NavLink className={'nav-link'}>Partners</NavLink>
                <NavLink className={'nav-link'}>Contact</NavLink>
            </ul>
            <button className="menu-toggle animate__animated animate__fadeInUp" onClick={handleShow}>
                <IoMenuSharp />
            </button>
            <div className="nav-actions animate__animated animate__fadeInRight">
                <button className='nav-action site-btn primary'>
                    Get a Quote
                </button>
                <button className='nav-action site-btn secondary'>
                    Book a Call
                </button>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
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
                        <NavLink className={'nav-link'}>Home</NavLink>
                        <NavLink className={'nav-link'}>Services</NavLink>
                        <NavLink className={'nav-link'}>About Us</NavLink>
                        <NavLink className={'nav-link'}>Partners</NavLink>
                        <NavLink className={'nav-link'}>Contact</NavLink>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    )
}