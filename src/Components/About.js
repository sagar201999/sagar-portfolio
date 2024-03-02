import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../MediaQuery.css'
import resume from '../Premsagar resume.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])




    return (
        <>
            <div id='about' className='py-4'>
                <div className='about-container' >
                    <div className='about-me'>

                        <div className='about-first' data-aos="zoom-in">
                            <img src='../../Images/aboutPic.png' alt='about' />
                        </div>
                        <div className='about-second' data-aos="zoom-in">
                            <h3 className='Tiffany-Blue'>About me</h3>
                            <p>Passionate Front-End Developer with a
                                strong foundation in HTML and CSS .
                                Proficient in HTML, CSS Bootstrap ,
                                have good knowlege of Javascipt React
                                and Figma . I thrive on transforming
                                design concepts into seamless user
                                experiences. With a keen eye for detail
                                and a commitment to writing clean .</p>

                        </div>

                    </div>
                    <div className='all-skills'>
                        <p data-aos="flip-down">HTML</p> <p data-aos="flip-down">CSS</p> <p data-aos="flip-down">JavaScript</p> <p data-aos="flip-down">Bootstrap</p>
                        <p data-aos="flip-down">ReactJS</p> <p data-aos="flip-down">Figma</p> <p data-aos="flip-down">TailwindCSS</p> <p data-aos="flip-down">Jquery</p>
                        <p data-aos="flip-down">Sql</p> <p data-aos="flip-down">Web Development</p> <p data-aos="flip-down">User Experience</p><p data-aos="flip-down">User Interface</p><p data-aos="flip-down">Web Applications</p>
                        <p data-aos="flip-down">Web Service</p> <p data-aos="flip-down">Publishing</p> <p data-aos="flip-down">Wordpress</p> <p data-aos="flip-down">Office 365</p>
                        <p data-aos="flip-down">Management Skills</p> <p data-aos="flip-down">Creative</p> <p data-aos="flip-down">Quick Learner</p> <p data-aos="flip-down">Problem Solving</p>
                        <p data-aos="flip-down">Critical Thinking</p>
                    </div>

                    <div className='text-center mt-4'>
                        <a href={resume} Download="resume"><button type="button">Download CV</button></a>
                    </div>

                </div>

                <div className='edu-exp py-5'>
                    <div className='education' data-aos="flip-left">
                        <h4>Education</h4>
                        <div>
                            <h5>MCA From Bamu University</h5>
                            <p>2021-2023</p>
                            <p>Graduated in Master Of Computer Application from Rajashri Shahu Institute Of Management in Year 2023 with 8.4 CGPA. </p>
                        </div>
                        <div data-aos="flip-left">
                            <h5>BCS From Bamu University</h5>
                            <p>2021-2023</p>
                            <p>Graduated in Bachelor Of Computer Science from Vidyadhan College Aurangabad in Year 2020 with 6.8 CGPA .</p>
                        </div>

                    </div>
                    <div className='experience' data-aos="flip-right">
                        <h4>Work Experience</h4>
                        <div>
                            <h5>KSJ Technology Pvt Lmt</h5>
                            <p>2022-2023</p>
                            <p>Web Developer as Intern</p>
                            <p>Responsibility :</p>
                            <ul>
                                <li className='my-2'>Implement User Interface</li>
                                <li className='my-2'>Make Responsive Design</li>
                                <li className='my-2'>Identifying and resolving issues</li>
                                <li className='my-2'>Create user friendly designs</li>
                                <li className='my-2'>Learn to Utilize different Frameworks</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='skills-bars py-5'>
                    <div className='tech'>
                        <h4>Technical Skills</h4>
                        <div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>HTML</p>
                                    <p>85%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-danger" style={{ width: "85%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>CSS</p>
                                    <p>75%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>Javascipt</p>
                                    <p>50%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-warning" style={{ width: "50%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>Bootstrap</p>
                                    <p>80%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-success" style={{ width: "80%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>React</p>
                                    <p>60%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-info" style={{ width: "60%" }}></div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='prof-skills'>
                        <h4>Professional Sills</h4>
                        <div className='prof'>
                            <div>
                                <div class="media-commom progress-bar-skill-1" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>60%</span></div>
                                <p className='text-center'>Communication</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-2" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>80%</span></div>
                                <p className='text-center'>Creativity</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-3" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>70%</span></div>
                                <p className='text-center'>Team Work</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>75%</span></div>
                                <p className='text-center'>Adaptability</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-5" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>80%</span></div>
                                <p className='text-center'>Problem Solving</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-6" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>80%</span></div>
                                <p className='text-center'>Innovation</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default About;