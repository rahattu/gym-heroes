import React from 'react';

const Contact = () => {
    return (
        
        <div className="container bg-light">
        <div className="row pt-5">
            <div className="col-md-6">
                <h1>Contact Info:</h1>
                <hr />
                <h3>Postal Address:</h3>
                <p>1st evenew, Banani , Dhaka ,Bangladesh</p>
                <hr />
                <h3>Phone Number:</h3>
                <p>01771276400</p>
                <h3>Email:</h3>
                <p>gymheroes@gmail.com</p>
                <hr />
                <h3>Facebook:</h3>
                <p>www.facebook/gymheroes.com</p>
                <hr />
            </div>
            <div className="col-md-6">
                <h1>Location Info:</h1>
                <img className="img-fluid" src="https://images.adsttc.com/media/image_maps/5cdc/cfac/284d/d18f/3c00/0091/large/open-uri20190516-12801-1w14ebb.jpg?1557974985" alt="" />
            </div>
        </div>
        <div className="row pt-5">

            <div className="col-md-4 m-auto">
                <h1>Contact With Us</h1>

                <form>
                    <input className="form-control" type="text" placeholder="Name" />
                    <br />
                    <input className="form-control" type="email" placeholder="Enter email" />
                    <br />
                    <textarea rows="8" cols="30" placeholder="Enter any question?"></textarea>
                    <br />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;