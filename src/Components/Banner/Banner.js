import React from 'react';
import banner1 from '../../images/pic1.jpg';
import banner2 from '../../images/banner2.jpeg';
import banner3 from '../../images/banner1.jpeg';
import './Banner.css';
//import Home from '../Home/Home';
//import Footer from '../Footer/Footer';
const Banner = () => {
    return (
      <div className=''>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={banner1} className="d-block w-100 " alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <div className='bg-danger'>
          <h1 className=' fs-2 fst-italic '>WELCOME TO GYM-HEROES</h1>
            <p className='fs-4 fst-italic'>we make future heroes</p>
          </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={banner2} className="d-block  w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <div className='bg-danger'>
          <h1 className=' fs-2 fst-italic '>WELCOME TO GYM-HEROES</h1>
            <p className='fs-4 fst-italic'>we make future heroes</p>
          </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block  w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <div className='bg-danger'>
          <h1 className=' fs-2 fst-italic '>WELCOME TO GYM-HEROES</h1>
            <p className='fs-4 fst-italic'>we make future heroes</p>
          </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
     
    );
};

export default Banner;