import React from 'react';
import './Info.css'
const Info = () => {
    return (
        <div>
            <div className="row container me-auto ms-auto ">
  <div className="col-sm-4 ">
    <div className="card card-container2 mb-2">
      <div className="card-body">
        <h5 className="card-title">Same Day in delivery</h5>
        <h1 className="icon"><i className="fas fa-truck icon"></i></h1>
        <p className="card-text">we are giving same day delivery as soon as possible.with proper medicine and helping guidline</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card card-container2 mb-2">
      <div className="card-body">
        <h5 className="card-title">Support all time</h5>
        <h1 className="icon"><i className="fas fa-phone-square icon"></i></h1>
        <p className="card-text">we always coOperate with patient and trying to help them a proper support</p>
      
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card card-container2 mb-2">
      <div className="card-body">
        <h5 className="card-title">prescription chekings</h5>
        <h1 className="icon"><i className="fas fa-file-prescription icon"></i></h1>
        <p className="card-text">Our stuff and pharmacist are proper interned and they can check patients prescrition as wells</p>
      
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Info;