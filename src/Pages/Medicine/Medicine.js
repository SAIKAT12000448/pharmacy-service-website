import React from 'react';
import './Medicine.css'
const Medicine = () => {
    return (
        <div>
         
            <div className="banner2  container" >
               <br /> 
        <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
     
         <h2 className="text-end"><span style={{color:'rgba(201, 26, 26, 0.425)'}}>medico</span> <i className="fas fa-prescription-bottle-alt text-success"></i></h2>
         </div>
         <br /><br /><br /><br /><br /><br /><br />
        
         <div className="text-center">
         <h1 className=" font2 fw-bolder">Medicines</h1>
        
         </div>
        </div>
           </div>



<h1 className="text-center my-5">Some Home Need Medicine</h1>

           <div className="container">
           <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card-container">
      <img src="https://emedi.com.bd/wp-content/uploads/2020/09/Napa-Extend-Tablet-665-mg.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Napa Extra</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-container">
      <img src="https://emedi.com.bd/wp-content/uploads/2020/09/Oradin-Tablet-10-mg.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Oradin</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-container">
      <img src="https://www.pharmacypointbd.com/wp-content/uploads/2020/09/Omidon-Tab.jpg" class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Omidon</h5>
  
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-container">
      <img src="https://renata-ltd.com/wp-content/uploads/2015/02/Maxpro-Capsule-Picture.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title  text-center">MAxpro</h5>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card-container">
      <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201803/horlicks_660_032918100915.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title  text-center">Horlicks</h5>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card-container">
      <img src="https://www.pacagemockup.com/wp-content/uploads/2020/09/Free-Multi-Vitamin-Bottle-Mockup-PSD-758x541.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title  text-center">Multi vitamin</h5>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card-container">
      <img src="https://sc04.alicdn.com/kf/HTB1hnC5m8fH8KJjy1Xbq6zLdXXaL.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title  text-center">Vitamin C</h5>
      </div>
    </div>
  </div>
 
</div>
           </div>

        </div>
    );
};

export default Medicine;