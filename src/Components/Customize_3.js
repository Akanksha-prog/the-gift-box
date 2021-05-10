import customize_2_img from '../images/customize-2-img.jpg';
import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';

const Customize_3 = () => {
    return (
        <section className="customize">
        <div className="container" data-aos="fade-right" data-aos-delay="1000">
            <div className="row customize-row">
                <div className="customize-form">
                <mobiscroll.Form>
                    <mobiscroll.FormGroup>
                        <mobiscroll.Textarea inputStyle="outline" labelStyle="floating" placeholder="Mention some of their hobbies">Hobbies</mobiscroll.Textarea>
                        <mobiscroll.Textarea inputStyle="outline" labelStyle="floating" placeholder="Movies, web-series, sitcoms...they love">Movies/Web-series</mobiscroll.Textarea>
                        <mobiscroll.Textarea inputStyle="outline" labelStyle="floating" placeholder="Do they like reading.. if yes, mention their favourite books">Books/ Magazines</mobiscroll.Textarea>
                        <mobiscroll.Textarea inputStyle="outline" labelStyle="floating" placeholder="Celebs/personalities they admire">Celebs/Personalities</mobiscroll.Textarea>
                        <mobiscroll.Textarea inputStyle="outline" labelStyle="floating" placeholder="Anything you want to add">Special Mention</mobiscroll.Textarea>
                        <mobiscroll.Textarea inputStyle="outline" labelStyle="floating" placeholder="Anything you want to avoid">Special Mention</mobiscroll.Textarea>
                    </mobiscroll.FormGroup>
                </mobiscroll.Form>    
                </div>
                <div className="customize-img">
                    <img src={customize_2_img} className="img-fluid"/>
                </div>
        </div>
        <div className="mbsc-btn-group-block">
            <mobiscroll.Button outline={true}>Submit</mobiscroll.Button>
        </div>
        </div>
    </section>
    )
}

export default Customize_3
