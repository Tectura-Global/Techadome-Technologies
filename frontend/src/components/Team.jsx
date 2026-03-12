import '../styles/Team.css'
import images from '../imports/images';
import Marquee from 'react-fast-marquee';

function Team () {

    return (
        <section id="team">
            <div className="team-container">
                <div className="team-header">
                    <h2 className="site-heading">
                        Meet the family
                    </h2>
                    <div className="team-banner">

                    </div>
                </div>
                <div className="team-content">
                    <div className="header">
                        <h2 className='site-heading'>
                            The<span> Techadome </span>Team
                        </h2>
                        <p className='site-p'>
                            An dedicated team of certified IT Technicians and Software Experts,
                            <span> tending to your every need</span>
                        </p>
                    </div>
                   <Marquee className='team-marquee' pauseOnHover={true}>
                        <div className="team-card">
                            <img src={images.team1} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Kgosi Mogotsi
                                </h4>
                                <p className='site-p'>
                                    Software Developer
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.team2} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Lana Banana
                                </h4>
                                <p className='site-p'>
                                    Network Architect
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.team3} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Nellan Khaya
                                </h4>
                                <p className='site-p'>
                                    Network Technician
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.team4} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    George Mann
                                </h4>
                                <p className='site-p'>
                                    Cybersecurity Expert
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.team5} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Jasper Doberan
                                </h4>
                                <p className='site-p'>
                                    Field Technician
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.team6} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Babalwa Ngubane
                                </h4>
                                <p className='site-p'>
                                    Field Technician
                                </p>
                            </div>
                        </div>
                   </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Team;