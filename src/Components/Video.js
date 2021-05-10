import React from 'react'
import video_1 from '../videos/video-1.mp4';
import video_2 from '../videos/video-2.mp4';

const Video = () => {
    return (
        <section className="videos">
            <div className="container" data-aos="fade-up" data-aos-delay="1000">
                <div className="row video-row">
                    <video className="video" src={video_1} controls="controls" width="600" height="300" />
                    <video className="video" src={video_2} controls="controls" width="600" height="300" />
                </div>
            </div>
        </section>
    )
}

export default Video
