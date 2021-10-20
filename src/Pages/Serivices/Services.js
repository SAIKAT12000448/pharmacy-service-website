import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    return (
        <div>
           <h1 className="text-center mt-2 text-danger">Our All Services!</h1> 
           <div className="row row-cols-1 row-cols-md-3 g-4 container text-center me-auto ms-auto">
           {
               services.map(service=><Service key={service.id} service={service}></Service>)
           }
        </div>
        </div>
    );
};

export default Services;