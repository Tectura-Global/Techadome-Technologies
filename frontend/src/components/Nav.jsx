import '../styles/Nav.css'

import { Link, NavLink } from "react-router-dom";
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
            <ul className=' animate__animated animate__fadeIn'>
                <NavLink className={'nav-link'}>Home</NavLink>
                <NavLink className={'nav-link'}>About Us</NavLink>
                <a className={'nav-link has-subnav'} href="#services">
                    Services
                    {/* <ul className='subnav'>
                    <h5 className='site-p'>Our Services</h5>

                    <button 
                        className={'subnav-item animate__animated animate__fadeInLeft'}
                        onClick={handleNav(1)}>
                        Managed Security Services (MSSP)
                    </button>

                    <button 
                        className={'subnav-item animate__animated animate__fadeInLeft'}
                        onClick={handleNav(2)}>
                        Network Infrastructure as a Service
                    </button>

                    <button 
                        className={'subnav-item animate__animated animate__fadeInLeft'}
                        onClick={handleNav(3)}>
                        Smart Building & Structured Cabling
                    </button>

                    <button 
                        className={'subnav-item animate__animated animate__fadeInLeft'}
                        onClick={handleNav(4)}>
                        SD-WAN & Connectivity Management
                    </button>

                    <button 
                        className={'subnav-item animate__animated animate__fadeInLeft'}
                        onClick={handleNav(5)}>
                        Cloud & Microsoft 365 Services
                    </button>

                    <button 
                        className={'subnav-item animate__animated animate__fadeInLeft'}
                        onClick={handleNav(6)}>
                        IT Support & NOC Services
                    </button>

                    <button 
                        className={'subnav-item animate__animated animate__fadeInLeft'}
                        onClick={handleNav(7)}>
                        Cybersecurity Awareness Training
                    </button>
                </ul> */}
                </a>
                <NavLink className={'nav-link'}>Partners</NavLink>
                <NavLink className={'nav-link'}>Contact</NavLink>
            </ul>
            <button className="menu-toggle animate__animated animate__fadeInUp" onClick={handleShow}>
                <IoMenuSharp />
            </button>
            <div className="nav-actions animate__animated animate__fadeInRight">
                {/* <button className='nav-action site-btn primary'>
                    Book a Call
                </button> */}
                <a href="#services" className='nav-action site-btn secondary'>
                    Our Services
                </a>
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