import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Blogs = () => {


    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])



    return (
        <>
            <div id='blogs'>
                <h1 className='text-center pt-3 fw-bolder skyBlue'>Fetaure Posts</h1>
                <div className='blogs-container container' >
                    <div className='blog-box' data-aos="zoom-out">
                        <img src='../../Images/blog-1.png' alt='blog img' />
                        <div className='d-flex justify-content-between my-3 w-75 fs-6' >
                            <p className='skyBlue'>JUNE 21, 2020</p>
                            <p className='skyBlue'>SAGAR</p>
                            <p><FontAwesomeIcon icon={faHeart}/></p>
                        </div>
                        <h4 className='fw-bold'>What are Node.js ":node" protocol imports?</h4>
                        <p>Gone are the days of the older require/module.exports/CommonJS import syntaxes.
                             In recent versions of Node.js....</p>
                    </div>
                    <div className='blog-box' data-aos="zoom-out">
                        <img src='../../Images/blog-2.jpg' alt='blog img' />
                        <div className='d-flex justify-content-between my-3 w-75 fs-6' >
                            <p className='skyBlue'>JUNE 21, 2020</p>
                            <p className='skyBlue'>SAGAR</p>
                            <p><FontAwesomeIcon icon={faHeart}/></p>
                        </div>
                        <h4 className='fw-bold'>What are Node.js ":node" protocol imports?</h4>
                        <p>Gone are the days of the older require/module.exports/CommonJS import syntaxes.
                             In recent versions of Node.js....</p>
                    </div>
                    <div className='blog-box' data-aos="zoom-out">
                        <img src='../../Images/blog-3.jpg' alt='blog img' />
                        <div className='d-flex justify-content-between my-3 w-75 fs-6' >
                            <p className='skyBlue'>JUNE 21, 2020</p>
                            <p className='skyBlue'>SAGAR</p>
                            <p><FontAwesomeIcon icon={faHeart}/></p>
                        </div>
                        <h4 className='fw-bold'>What are Node.js ":node" protocol imports?</h4>
                        <p>Gone are the days of the older require/module.exports/CommonJS import syntaxes.
                             In recent versions of Node.js....</p>
                    </div>
                </div>
                <div className='text-center py-5'>
                    <button> Show More</button>
                </div>

            </div>

        </>
    )
}

export default Blogs;