import img1 from '../images/vision.jpg'
import '../App.css'

const Vision = () => {
    return (
        <section className="vision">
        <div className="container" data-aos="fade-right" data-aos-delay="500">
            <div className="row justify-content-center section-title">
                    <h3>Our Vision</h3>
            </div>
            <div className="row vision-row">
                <div className="vision-img">
                <img src={img1} className="img-fluid"/>
                </div>
                <div className="vision-content">
                    <h4>We at THEGIFTBOX are committed to giving you and your loved one’s experiences that are sure to be cherished for a very long time. </h4>
                    <p>We are India’s best online gift store wherein you will find amazing gift ideas for all your special relationships. With an experience of over 15 years in the gifting industry, we at THEGIFTBOX exactly know what impact a thoughtful gift can have on the mind of the receiver. Picking a perfect gift is an art. Making the right gift selection takes planning, research, and personal attention. While selecting the best gifts for loved ones, you need to take into consideration the recipients likes and dislikes, their personality, and preferences. Also, the gift needs to be thoughtful and user-friendly at the same time. When choosing a gift for someone special, you need to put in that extra effort to ensure a "wow" moment for the receiver when the wrapping paper comes off.</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Vision
