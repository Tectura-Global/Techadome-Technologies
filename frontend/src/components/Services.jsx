import 'animate.css';
import { act, useRef, useState } from 'react';
import '../styles/services.css';

function Services () {

    const [activeCourse, setActiveCourse] = useState('');

    return (
        
        <div id="hypermenu" className="carousel-container desktop">
            
            <aside className="carousel-sidebar">
                <div>
                    <h2 className="site-heading">Our <span>Solutions</span></h2>
                    <p className='site-p'>
                        Learn fundamental programming concepts, problem-solving 
                        techniques, and software development methodologies to 
                        build a strong foundation in systems development and enhance 
                        your skills as an engineer.
                    </p>
                </div>
                <ul id="carousel-list">
                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('Smart Building Cabling Solutions')}
                    >
                        <h3 className="site-header">Smart Building Cabling Solutions</h3>
                        <span>NQF 4</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('Hybrid Cloud Connectivity')}
                    >
                        <h3 className="site-header">Hybrid Cloud Connectivity</h3>
                        <span>NQF 5</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('Data Security')}
                    >
                        <h3 className="site-header">Data Security</h3>
                        <span>NQF 4</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('Microsoft 365 Cloud Migration')}
                    >
                        <h3 className="site-header">Microsoft 365 Cloud Migration</h3>
                        <span>NQF 5</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('Employee Management Systems')}
                    >
                        <h3 className="site-header">Employee Management Systems</h3>
                        <span>NQF 3</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('Building Security Systems')}
                    >
                        <h3 className="site-header">Building Security Systems</h3>
                        <span>NQF 6</span>
                    </li>
                </ul>
            </aside>

            {activeCourse && 
                (<div id="carousel-panels" key={activeCourse} className='animate__animated animate__fadeIn'>

                    <div id="panel-1" className='panel'>
                        <p>Salmon</p>
                    </div>

                    <div id="panel-2" className='panel'>
                        <p>Broccoli</p>
                    </div>

                    <div id="panel-3" className='panel'>
                        <p>Tamago</p>
                    </div>

                    <div id="panel-4" className='panel'>
                        <h1>{activeCourse}</h1>
                    </div>

                    <div id="panel-5" className='panel'>
                        <p>Edamame</p>
                    </div>

                    <div id="panel-6" className='panel'>
                        <p>Tomato</p>
                    </div>

                </div>)}
        </div>
    )
}

export default Services;