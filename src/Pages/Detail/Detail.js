import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {serviceid}=useParams()
    const serviceId=parseInt(serviceid)
    const[detail,setdetail]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
             setdetail(data)
           
        })

    
    },[])
    const eachdetail = detail.find(each=>each.id===serviceId)

    return (
        <div>
            
            <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={eachdetail?.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">{eachdetail?.title}</h2>
        <p class="card-text">{eachdetail?.description}</p>
        <button type="button" class="btn btn-warning"><h2><i class="fas fa-phone-volume"></i></h2> Call</button>
      </div>
    </div>
  </div>
</div>
          
          

        </div>
    );
};

export default Detail;