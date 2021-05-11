import '../App.css'
import { SiGmail } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import {AiFillInstagram } from "react-icons/ai";
import {AiFillLinkedin } from "react-icons/ai";
import {AiFillTwitterSquare } from "react-icons/ai";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container" data-aos="fade-up" data-aos-delay="1000">
                <div className="row section-title justify-content-center">
                    <h3>Contact Us</h3>
                </div>
                <div className="row contact-row-1" style={{display:flex}}>
                    <div className="contact-box-1">
                        <SiGmail className='icon'/>
                        <h6>xyz@gmail.com </h6>
                    </div>
                    <div className="contact-box-1">
                        <AiFillPhone className='icon'/>
                        <h6>+91 1234567890 </h6>
                    </div>
                </div>

                <div className="row contact-row-2">
                    <div className="contact-box-2">
                        <AiFillFacebook className='icon'/>
                    </div>
                    <div className="contact-box-2">
                        <AiFillInstagram className='icon'/>
                    </div>
                    <div className="contact-box-2">
                        <AiFillLinkedin className='icon'/>
                    </div>
                    <div className="contact-box-2">
                        <AiFillTwitterSquare className='icon'/>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Contact
