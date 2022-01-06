import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/pic0.png';
import './Navbar.css';
const Navbar = () => {
    
    const handleLogout=()=>{
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email')
        window.location.replace("/");
    }    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fs-4 bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/"><img className='rounded-circle w-2' src={Logo} style={{ width: '50px'  }} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About-Us</Link>
                            </li>
                            {sessionStorage.getItem('name') || sessionStorage.getItem("email") ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login"><img style={{ height: '30px' }} className="img-fluid rounded-circle" src={sessionStorage.getItem('pic')} /> {sessionStorage.getItem('name')} <span onClick={handleLogout}>Logout</span></Link>


                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Log_In</Link>
                                </li>
                            }
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/login">Log_In</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/special">Special</Link>
                                </li>
                            
                            

                            



                        </ul>
                    </div>
                </div>
            </nav>

    
        </div>
    );
};

export default Navbar;