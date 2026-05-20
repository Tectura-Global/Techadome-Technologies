import 'animate.css';
import servicePillars from '../data/servicePillars';
import { useState } from 'react';
import '../styles/services.css';

function Services() {
    const [activeService, setActiveService] = useState(servicePillars[0]);

    return (
        <section id="services">
            <div id="hypermenu" className="carousel-container desktop">
                
                <aside className="carousel-sidebar">
                    <div className='header'>
                        <h2 className="site-heading">Our <span>Solutions</span></h2>
                        <p className='site-p'>
                            Comprehensive IT and cybersecurity solutions designed for South African SMEs and mid-market businesses.
                        </p>
                    </div>

                    <ul id="carousel-list">
                        {servicePillars.map((service) => (
                            <li
                                key={service.id}
                                className={`carousel-item ${activeService.id === service.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService(service)}
                            >
                                <h3 className="site-header">{service.title}</h3>
                            </li>
                        ))}
                    </ul>
                    <select 
                        id="carousel-list"
                        className="mobile"
                        value={activeService.id}
                        onChange={(e) => {
                            const selected = servicePillars.find(s => s.id === parseInt(e.target.value));
                            if (selected) setActiveService(selected);
                        }}
                    >
                        {servicePillars.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.title}
                            </option>
                        ))}
                    </select>
                </aside>

                {/* Right Panel - Dynamic Content */}
                <div 
                    id="carousel-panels" 
                    key={activeService.id}
                    className='animate__animated animate__fadeIn'
                >
                    {/* Panel 1: Title */}
                    <div id="panel-1" className='title panel'>
                        <h1 className='site-heading'>{activeService.title}</h1>
                    </div>

                    {/* Panel 2: Description */}
                    <div id="panel-2" className='panel main'>
                        <p className="site-p">
                            {activeService.description}
                        </p>
                    </div>

                    {/* Panel 3: What's Included */}
                    <div id="panel-3" className='panel'>
                        <h2 className="site-heading service-title">What's Included</h2>
                        <ul>
                            {activeService.whatsIncluded.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Panel 4: Extra Info (Unified) */}
                    {activeService.extraInfo && (
                        <div id="panel-4" className='panel'>
                            <div className="details">
                                <p className="site-p">{activeService.extraInfo}</p>
                                <a href="https://outlook.office.com/book/TechadomeTechnologies@tecturaglobal.com/" className='nav-action site-btn primary'>
                                    Book a Call
                                </a>
                            </div>
                            <img src={activeService.imgSrc} alt="" loading='eager'/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;