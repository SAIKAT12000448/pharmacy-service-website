import React from 'react';
import './Owner.css'
const Owner = () => {
    return (
        <div className="container text-center p-3 owner">
            <div className="d-lg-flex justify-content-around ms-2">
             <div className="me-4">
             <img className="img-fluid image" src="https://image.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25541.jpg" alt="" />
             </div>
             <div>
                 <h1> My Name is Jacline Datta.</h1><br /><br />
                 <h5>My vision is to to Help people and give them proper guidence for keep their body healthy.</h5>
                 <h5>supplying medicine in emergency</h5><br />
                 <button type="button" className="btn about fw-bolder">More About me</button>
                <h1><i className="fab fa-linkedin text-primary"></i></h1>
             </div>

                
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Owner;