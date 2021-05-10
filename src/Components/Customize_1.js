import customize_1_img from '../images/customize-1-img.jpg';
import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';

const Customize_1 = () => {

    return (
        <section className="customize" id="customize">
            <div className="container" data-aos="fade-right" data-aos-delay="1000">
                <div className="row section-title justify-content-center">
                    <h3>Customize Your Own Gift</h3>
                </div>
                <div className="row customize-row">
                    <div className="customize-img">
                        <img src={customize_1_img} className="img-fluid"/>
                    </div>
                    <div className="customize-form">
                    <mobiscroll.Form>
                        <mobiscroll.FormGroup>
                            <mobiscroll.Dropdown inputStyle="outline" label="For whom are you ordering this gift for?">
                                    <option value="mother">Mother</option>
                                    <option value="father">Father</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="boyfriend">Boyfriend</option>
                                    <option value="girlfriend">Girlfriend</option>
                                    <option value="friend">Friend</option>
                                    <option value="other">Other</option>
                                </mobiscroll.Dropdown>
                                <mobiscroll.Dropdown inputStyle="outline" label="What is the special occasion?">
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Marriage Anniversary</option>
                                    <option value="valentines">Valentines</option>
                                    <option value="christmas">Christmas</option>
                                    <option value="raksha">Raksha Bandhan</option>
                                    <option value="other">Other</option>
                                </mobiscroll.Dropdown>
                                <mobiscroll.Dropdown inputStyle="outline" label="Please select an estimated price range">
                                    <option value="below-2">Below 2k</option>
                                    <option value="2-4">2k - 4k</option>
                                    <option value="4-6">4k - 6k</option>
                                    <option value="above-6">Above 6k</option>
                                </mobiscroll.Dropdown>
                        </mobiscroll.FormGroup>
                    </mobiscroll.Form>    
                    </div>
            </div>
            </div>
        </section>
    )
}

export default Customize_1
