import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `navbar p-4 navbar-expand-lg navbar-dark fixed-top Suggeste3D ${scrolling ? 'scrolled' : ''}`;



    return (
        <>

            <motion.nav className={navbarClasses}
                initial={{ y: -300 , opacity: 0}}
                animate={{ y: 0 , opacity: 1 }}
                transition={{delay: 1.5 , duration: 2}}>
                <div className="container">
                    <a className="navbar-brand " href="/">SAGAR <span className='Tiffany-Blue'>MAGARE</span></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}>
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#work">WORK</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#blogs">BLOGS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar;