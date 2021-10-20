import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{id,title,img,description}=props.service
    return (
        <div className="">
      
  <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">{title}</h5>
        <p class="card-text">{description}</p><br />
       <Link to={`/detail/${id}`}> <button type="button" class="btn btn-success">Details</button></Link>
      </div>
    </div>
  
 
  
  
</div>
        </div>
    );
};

export default Service;