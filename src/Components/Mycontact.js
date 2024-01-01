import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Aboutme.css"
import "../Styles/Contact.css"
import email from "../Assets/Images/email.svg"
import phone from "../Assets/Images/phone.svg"
import location from "../Assets/Images/location.svg"
import Preloader from './Preloader';
import toast from 'react-hot-toast';



const Mycontact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_paphksk', 'template_hg9pf8t', form.current, 'pfOhM6ujfpEqO1rOt')
        .then((result) => {
            setLoading(false)
            toast.success('Sent', {
				position: 'top-right',
			})
        }, (error) => {
            setLoading(false)
            toast.error('Something went wrong', {
				position: 'top-right',
			})
        });

    };
    
  return (
    <>
        {loading
        ?
        <Preloader/>
        :
        <div className='container-fluid p-0 aboutme'>
            <div className='about'><p>CONTACT</p></div>
            <div className='container-fluid above'>
                <p className='am'>CONTACT ME</p>
                <div className='anime'>
                    <div className='move'></div>
                </div>
            </div>
            <div className='container-fluid conmd my-5'>
                <div className='row'>
                <div className='cu1 col-md'>
                    <p className='cup1'>Contact Information</p>
                    <p className='cup2'>Reach out to me and let's drive results! You can find my contact information on the page, I am always available to discuss potential opportunities and collaborations. Let's connect.</p>
                    <div className='cu3'>
                        <div className='cuimg'>
                        <img src={phone}/>
                        </div>
                        <div className='cu4'>
                        <p className='cup3'>Contact on phone</p>
                        <a href='tel:+2347010549096' className='cua1'>07010549096</a>
                        <br></br>
                        <a className='cua2' href='tel:+2348181451877'>08181451877</a>
                        </div>
                    </div>
                    <div className='cu3'>
                        <div className='cuimg'>
                        <img src={email}/>
                        </div>
                        <div className='cu4'>
                        <p className='cup3'>Contact on mail</p>
                        <a href='mailto:ayodejiamzat@gmail.com' className='cua1'>ayodejiamzat@gmail.com</a>
                        <br></br>
                        <a className='cua2' href='mailto:ayodejiamzat@gmail.com'>amzat@gmail.com</a>
                        </div>
                    </div>
                    <div className='cu3'>
                        <div className='cuimg'>
                        <img src={location}/>
                        </div>
                        <div className='cu4'>
                        <p className='cup3'>Contact address</p>
                        <address className='cua1'>Air Force base Ikeja</address>
                        </div>
                    </div>
                </div>
                <div className='col-md cfo'>
                    <form className='cu2' ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <br></br>
                        <input placeholder='Enter Your Name' name="user_name"/>
                        <br></br>
                        <label>Email</label>
                        <br></br>
                        <input placeholder='Enter Your Email...' name="user_email"/>
                        <br></br>
                        <label>Subject</label>
                        <br></br>
                        <input placeholder='Enter Subject...' name='subject'/>
                        <br></br>
                        <label>Message</label>
                        <br></br>
                        <textarea placeholder='Enter Your Message...' name="message"/>
                        <br></br>
                        <button type="submit" value="Send">SEND MAIL</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default Mycontact