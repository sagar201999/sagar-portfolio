import '../App.css'
import '../MediaQuery.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const Home = () => {

    const handleGithub = () => {
        window.open('https://github.com/sagar201999', 'blank');
    };

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/premsagar-magare-790961263/', 'blank');
    };



    return (
        <>
            <Parallax speed={0}>
                <section id='home' className='my-cursor'>
                    <main className='home-info container'>
                        <motion.div className='first'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 3 }} >
                            <h5>HELLO THERE</h5>
                            {/* <TypeAnimation 
                            sequence={[
                                'prem sagar magare',
                                3000,
                                'प्रेम सागर मगरे',
                                3000,
                                () => {
                                    console.log('Sequence completed');
                                }
                            ]}
                            wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '1.5rem', display: 'inline-block' }}
                            /> */}
                            <h1>I'm Prem Sagar Magare</h1>
                            <h4>I'm A<span> </span>
                                <TypeAnimation
                                    sequence={[
                                        'Web Developer', // Types 'One'
                                        3000,
                                        'UI Developer',
                                        4000,
                                        () => {
                                            console.log('Sequence completed');
                                        },
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '1.5rem', display: 'inline-block' }}
                                />
                            </h4>
                            <div className='mt-4'>
                                <div className='d-flex align-items-center my-2'>
                                    <FontAwesomeIcon icon={faEnvelope} className='mt-2 me-3' />
                                    <a href='mailto:smagare1111@gmail.com'>smagare1111@gmail.com</a>
                                </div>
                                <div className='d-flex my-2'>
                                    <FontAwesomeIcon icon={faPhone} className='mt-1 me-3' />
                                    <a href='tel:8669075818'>+91 - 8669075818</a>
                                </div>
                                <div className='d-flex'>
                                    <FontAwesomeIcon icon={faLocationDot} className='mt-1 me-3' />
                                    <p>Sanjanagar , Aurangabad</p>
                                </div>
                            </div>
                            <div className='mb-2'>
                                <FontAwesomeIcon icon={faInstagram} className='me-3 mt-3 fs-5' style={{ cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faTwitter} className='mx-4 mt-3 fs-5' style={{ cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faGithub} className='mx-4 mt-3 fs-5' onClick={handleGithub} style={{ cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faLinkedinIn} className='ms-4 mt-3 fs-5' onClick={handleLinkedIn} style={{ cursor: 'pointer' }} />
                            </div>
                        </motion.div>
                        {/* <motion.div className='second'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 3 }}
                    >
                        <img src='../../Images/profilePic.jpeg' alt='profile' />
                    </motion.div> */}
                    </main>
                </section>
            </Parallax>

        </>
    );
};

export default Home;
