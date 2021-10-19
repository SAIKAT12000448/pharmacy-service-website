import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import './Header.css'
const Header = () => {
    const {user,logOut}=useFirebase();
   
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand mt-2">DATTA PHARMACY</h2>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    
      <ul className="navbar-nav  ms-auto mb-2 mt-2 ms-3 mb-lg-0">
        <li className="nav-item">
        <h5><Link style={{textDecoration:"none"}} to="/home">Home</Link></h5>
        </li>
        <li className="nav-item ms-5">
        <h5><Link style={{textDecoration:"none"}} to="/services">Services</Link></h5>
        </li>
           
      </ul>
   
    <Link to='/login'><button className="bg-white text-dark fw-bold me-3 rounded-pill mx-3">Log In</button></Link>
    <Link to='/register'><button className="bg-white text-dark fw-bold me-3 rounded-pill mx-3">Register</button></Link>
    
  {
      user?.displayName &&
      
     <button onClick={logOut} className="bg-white text-dark fw-bold me-3 rounded-pill mx-3">Log Out</button>

  }
 
    </div>
  <span className="text-white me-3">{user.displayName}</span>
<img style={{borderRadius:'50px',width:'50px'}} src={user.photoURL} alt="" />

   
  </div>
</nav>

        </div>
    );
};

export default Header;