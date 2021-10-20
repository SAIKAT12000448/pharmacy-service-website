import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../Parts/Info';
import Owner from '../Parts/Owner/Owner';
import Services from '../Serivices/Services';
import './Home.css'
const Home = () => {
    return (
        <div className="border">
           <div className="banner  container" >
               <br /> 
        <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <h1  className="fw-bold font">Purpose of Our phramacy is help <br /> You for Your Better Health</h1>
         <h2 className="text-end"><span style={{color:'rgba(201, 26, 26, 0.425)'}}>medico</span> <i className="fas fa-prescription-bottle-alt text-success"></i></h2>
         </div>
         <br /><br /><br /><br /><br /><br /><br />
        
         <div className="text-center">
         <h1 className=" font2 fw-bolder">Best Pharmacy</h1>
          <Link to="/services"><button type="button" className="btn btn-handler fw-bolder">see our services</button></Link>
         </div>
        </div>
           </div>

   <Info></Info><br /><br /><br /><br />
   <Services></Services><br /><br /><br />
   <Owner></Owner>
        </div>
    );
};

export default Home;