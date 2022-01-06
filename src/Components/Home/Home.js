import React from 'react';
//import Banner from '../Banner/Banner'
import gym from '../../images/home.jpg'
const Home = () => {
    return (
           
              
            
        <div className="container">
            

            <div className="row mt-5 pt-5">
                <div className="col-md-6">
                    <p> <h1 className="display-2">Gym-heroes</h1></p>
                    <p>Burn combines the best aspects of HIIT, Strength Training + Hard Core Pilates to create a heart-pumping, body-shaking workout. We believe that movement is medicine and working out is the best way to care for our physical and emotional well-being.

Whether you prefer the accountability of a live class, the flexibility of on-demand classes or the ability to transform your space into a full-body gym, Burn by Lisa Corsello offers you workout options that fit into your life.</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={gym} alt="" />
                </div>

            </div>
        
        </div>
       
    );
};

export default Home;