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
                            <img src={images.teamInnocent} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Innocent Mhura
                                </h4>
                                <p className='site-p'>
                                    Head of IT
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.teamKhutso} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Khutso Malatji
                                </h4>
                                <p className='site-p'>
                                    IT Manager
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.teamLenford} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Lenford Ndhovela
                                </h4>
                                <p className='site-p'>
                                    IT Manager
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.teamShadow} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Shadow Ngomane
                                </h4>
                                <p className='site-p'>
                                    Network Specialist
                                </p>
                            </div>
                        </div>
                        <div className="team-card">
                            <img src={images.teamSoso} className='team-img' alt="" />
                            <div className="team-details">
                                <h4 className='site-heading'>
                                    Nangamso Myingwa
                                </h4>
                                <p className='site-p'>
                                    Network Specialist
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