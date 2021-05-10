import Carousel from "react-elastic-carousel";
import test_1 from '../images/test-1.jpg';
import test_2 from '../images/test-2.jpg';
import test_3 from '../images/test-3.jpg';
import test_4 from '../images/test-4.jpeg';
import {FontAwesome} from 'react-icons/fa';
import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";
import React from "react";
let resetTimeout;


const Testimonial = () => {
    const carouselRef = React.useRef(null);
    return (
        <section id="testimonial">
            <div  data-aos="fade-right" data-aos-delay="1000">
                <div className="row section-title justify-content-center">
                        <h3>What Our Clients Have To Say</h3>
                </div>
                <div className="testimonials">
                    <Carousel 
                    ref={carouselRef}
                    enableAutoPlay
                    autoPlaySpeed={5000} // same time
                    onNextEnd={({ index }) => {
                        clearTimeout(resetTimeout)
                        if (index === 4-1) {
                            resetTimeout = setTimeout(() => {
                            carouselRef.current.goTo(0)
                        }, 5000) // same time
                        }
                    }}
                    easing='ease' >
                        <div className="testimonial">
                            <img src={test_1} className="test-img img-fluid" alt=""/>
                            <div className="test-text">
                                <h3>Aastha Mehra</h3>
                                <h5>Mumbai</h5>
                                <p><FaQuoteLeft className='icon'/>Has a good selection of coverage. It was my first experience and what can I say by far the best app. Delivery on time.<FaQuoteRight className='icon'/></p>
                            </div>
                        </div>
                        <div className="testimonial">
                            <img src={test_2} className="test-img img-fluid" alt=""/>
                            <div className="test-text">
                                <h3>Francis Aplhanso</h3>
                                <h5>Noida</h5>
                                <p><FaQuoteLeft className='icon'/>Product packaging is marvellous and the product is exactly the same as shown in the picture. Thanks THEGIFTBOX, looking forward to shop again!!<FaQuoteRight className='icon'/></p>
                            </div>
                        </div>
                        <div className="testimonial">
                            <img src={test_3} className="test-img img-fluid"  alt=""/>
                            <div className="test-text">
                                <h3>Hetal Gothi</h3>
                                <h5>Begusarai</h5>
                                <p><FaQuoteLeft className='icon'/>All good. Very good quality of product. Highly impressed. Great product, timely delivery, happy customer.<FaQuoteRight className='icon'/></p>
                            </div>
                        </div>
                        <div className="testimonial">
                            <img src={test_4} className="test-img img-fluid"  alt=""/>
                            <div className="test-text">
                                <h3>Ruchi Goda</h3>
                                <h5>Mumbai</h5>
                                <p><FaQuoteLeft className='icon'/>Awesome. Best delivery and best quality. Service and product received was as committed. Good purchase.<FaQuoteRight className='icon'/></p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            
            </div>
        </section>
    )
}

export default Testimonial
