import 'animate.css';
import { useRef, useState } from 'react';
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
                        onMouseEnter={() => setActiveCourse('red')}
                    >
                        <h3 className="site-header">Smart Building Cabling Solutions</h3>
                        <span>NQF 4</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('orange')}
                    >
                        <h3 className="site-header">Hybrid Cloud Connectivity</h3>
                        <span>NQF 5</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('yellow')}
                    >
                        <h3 className="site-header">Data Security</h3>
                        <span>NQF 4</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('green')}
                    >
                        <h3 className="site-header">Microsoft 365 Cloud Migration</h3>
                        <span>NQF 5</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('blue')}
                    >
                        <h3 className="site-header">Employee Management Systems</h3>
                        <span>NQF 3</span>
                    </li>

                    <li
                        className="carousel-item"
                        onMouseEnter={() => setActiveCourse('purple')}
                    >
                        <h3 className="site-header">Building Security Systems</h3>
                        <span>NQF 6</span>
                    </li>
                </ul>
            </aside>

            <div id="carousel-panels" style={{backgroundColor: activeCourse}}>
                <p>{activeCourse}</p>
            </div>
        </div>
    )
}

export default Services;