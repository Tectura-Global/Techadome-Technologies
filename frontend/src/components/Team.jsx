import '../styles/Team.css'
import images from '../imports/images';
import Marquee from 'react-fast-marquee';

function Team () {

    return (
        <section id="team">
            <div className="team-container">
                <div className="header">
                    <h2 className='site-heading'>
                        The<span> Techadome </span>Team
                    </h2>
                    <p className='site-p'>
                        A dedicated team of certified IT Technicians and Software Experts,
                        <span> tending to your every need</span>
                    </p>
                </div>
                <div className='team-marquee'>
                    <div className="team-card">
                        <div className="team-img">
                            <img src={images.teamAlbert} alt="" />
                        </div>
                        <div className="team-details">
                            <h4 className='site-heading'>
                                Albert Githae
                            </h4>
                            <p className='site-p'>
                                Operations Manager
                            </p>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="team-img">
                            <img src={images.teamInnocent} alt="" />
                        </div>
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
                        <div className="team-img">
                            <img src={images.teamKhutso} alt="" />
                        </div>
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
                        <div className="team-img">
                            <img src={images.teamLenford} alt="" />
                        </div>
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
                        <div className="team-img">
                            <img src={images.teamShadow} alt="" />
                        </div>
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
                        <div className="team-img">
                            <img src={images.teamSoso} alt="" />
                        </div>
                        <div className="team-details">
                            <h4 className='site-heading'>
                                Nangamso Myingwa
                            </h4>
                            <p className='site-p'>
                                Network Specialist
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;