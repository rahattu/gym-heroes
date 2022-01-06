import React from 'react';
import room from '../../images/room.jpeg';
const About = () => {
    return (
        <div className=" bg-light">
        <h1 className="text-center fw-3">About Us</h1>
        <div className="row">
            <div className=" m-5"> <h3>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs.</h3>
            </div>

        </div>
    <div className='container'>
    <div className="row ">
            <div className="col-md-6 ">
            <h2>YOUR SUCCESS IS OUR PASSION</h2>
                <h2>Our dedicated <br /><span className="display-5 text-info">Gym-heroes team</span></h2>
                <p className="text-muted mt-3">Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences.</p>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" alt="" src={room} />
            </div>
        </div>
    </div>
    </div>
    );
};

export default About;