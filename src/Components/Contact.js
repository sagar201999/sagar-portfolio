import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <>
            <section id='contact'>
                <div className='contact-info'>
                    <div className='d-flex align-items-center contact-container'>
                        <FontAwesomeIcon className='contact-icon' icon={faPaperPlane} />
                        <div className='contact-text'>
                            <h6>Adress</h6>
                            <p className='pb-0'>Sanjaynagar , Aurangabad</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center contact-container'>
                        <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                        <div className='contact-text'>
                            <h6>Email</h6>
                            <p className='pb-0'>smagare1111@gmail.com</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center contact-container'>
                        <FontAwesomeIcon className='contact-icon' icon={faPhone} />
                        <div className='contact-text'>
                            <h6>Contact Number</h6>
                            <p className='pb-0'>+91 - 8669075818</p>
                        </div>
                    </div>


                </div>
                <div className='messege'>
                    <form>
                        <div>
                            <input type='text' placeholder='name' className='input-style'></input>
                        </div>
                        <div>
                            <input type='text' placeholder='email' className='input-style'></input>
                        </div>
                        <div>
                            <input type='text' placeholder='subject' className='input-style'></input>
                        </div>
                        <div>
                            <textarea typeof='text' placeholder='messege' className='input-style' rows={7}></textarea>
                        </div>
                        <div>
                            <button>Send Message</button>
                        </div>
                    </form>

                </div>
            </section>

        </>
    )
}

export default Contact;