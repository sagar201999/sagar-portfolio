import { useState , useEffect} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Aos from 'aos';


const Projects = () => {

    const [project, setProject] = useState([]);  // store the projects list data fetch from api


    useState(() => {                             // fetching the project data list
        fetch('https://dev-9hjj0nvglnhld7j.api.raw-labs.com/mock/Projects')
            .then(response => response.json())
            .then((project) => setProject(project));
    })


    useEffect(() => {                           // for animations
        Aos.init({ duration: 3000 });
    }, [])


    const openLinkInNewWindow = (link) => {      //code for projetcs link which can redirect user to new tab. 
        window.open(link, '_blank');
    };


    const [show, setShow] = useState(false);   // for expanding and shrinking the button of projects

    const toggleProduct = () => {             //  toggle function for button 
        setShow(!show);

    }

    return (
        <>
            <section className='bg-black' id='projects'>
                <h1 className='text-center py-3 skyBlue fw-bolder'>My Projects</h1>
                <div className='container py-5 d-flex justify-content-evenly flex-wrap'>
                    {show ? (
                        project && project.map((items) => (
                            <div class="card" key={items.id} data-aos="zoom-out">
                                <img src={items.image} alt='petnutro ' />
                                <div class="card__content">
                                    <p>{items.dev}</p>
                                    <h4 className='skyBlue fw-bolder'>{items.title}</h4>
                                    <p>{items.tech}</p>
                                    <p style={{ fontSize: '.9rem' }}>{items.description}</p>
                                    <button onClick={() => openLinkInNewWindow(items.link)}>Visit site</button>
                                </div>
                            </div>
                        ))
                    ) : project.slice(0, 3).map((items) => (
                        <div class="card" key={items.id} data-aos="zoom-out">
                            <img src={items.image} alt='petnutro ' />
                            <div class="card__content">
                                <p>{items.dev}</p>
                                <h4 className='skyBlue fw-bolder'>{items.title}</h4>
                                <p>{items.tech}</p>
                                <p style={{ fontSize: '.9rem' }} >{items.description}</p>
                                <button onClick={() => openLinkInNewWindow(items.link)}>Visit site</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center py-5">
                    <button onClick={toggleProduct}>
                        {show ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </section>
            <hr className='m-0'/>
        </>
    )
}

export default Projects;


// Web Development

// Employee Management
// Design & Development

// Employee Management System simplifies employee administration. It's an easy-to-use platform that centralizes HR tasks like scheduling, payroll, and performance metrics.

// View Details


// Web Design

// Book Store
// Design & Development

// bookstore webpage, built with React, showcases a curated collection of books. Discover titles, authors, and prices while enjoying a seamless browsing experience.

// Web Design

// Petnutro
// Design & Development

// "PetNutro: Your Comprehensive Pet Nutrition Marketplace , PetNutro is the ultimate developer-friendly platform designed to streamline the integration of premium pet nutrition features.