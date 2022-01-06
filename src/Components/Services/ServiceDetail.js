import React from 'react';
import { useHistory } from 'react-router';




const ServiceDetail = ({ service }) => {
   
   
    //console.log(service);
    const history = useHistory()
    const handleDetail = (data) => {
       
        history.push(`/moreDetails/${data.id}`)

    }

    
    return (
      
           
            <div className="col-md-4">
            <div className="card">
            <img src={service.pic} className='img-fluid' alt="" />
                <div className="card-body">
                    <h5 className="fs-4 text-center">{service.name}</h5>
                    <p className="text-muted">{service.desc}</p>
                    <h5> ${service.price}</h5>
        <button  onClick={() => handleDetail(service)}  className="btn btn-danger">More</button>
                </div>
            </div>

        </div>
        
        
    );
};

export default ServiceDetail;