import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import gymService from '../Data/Data';
import './MoreDetails.css';

const MoreDetails = () => {
    
    
    const [item,setItem]=useState({})
   
    const {id}=useParams();
    useEffect(()=>{
        const filterItems=gymService.filter((data)=>data.id === id)
        setItem(filterItems[0])
        console.log(filterItems[0])
    },[id])
  
    return (
        <div className="container mb-5">
        <div className="row mt-5 pt-5">
            <div className="col-md-6">
                {/* <img className="img-fluid" src={`../../images/${item.pic}`} alt="" /> */}
                <img className='img-fluid' src={item.pic} alt='' />
            </div>
            <div className="col-md-6">
                <h5 className="text-primary text-center fw-bold fs-1">{item.name}</h5>

                <p className="fs-6 fw-bold">{item.more}</p>
                <p className="text-danger fw-bold fs-5">Costs: $ {item.price}</p>
                <Link to="/services">  <button className="btn btn-warning">Back To Service</button></Link>
            </div>
        </div>



    </div>
    );
};

export default MoreDetails;