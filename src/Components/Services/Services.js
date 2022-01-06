import React, { useState } from 'react';
import gymService from '../Data/Data';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    const [service] = useState(gymService)
    // console.log(service);
    return (
        <div className="container">
        <div className="row">
            {
                service.map((service) => {
                    return <ServiceDetail key={service.id} service={service} />
                })
            }

        </div>
    </div>
    );
};

export default Services;