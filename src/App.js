
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Authprovider from './Pages/Context/Authprovider';

import Detail from './Pages/Detail/Detail';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Register from './Pages/Register/Register';
import Services from './Pages/Serivices/Services';
import Privateroute from './Pages/Privateroute/Privateroute';
import Header from './Shared/Header';

function App() {
  return (
    <div>
    <Authprovider>
       <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route path="/home">
          <Home></Home>
       </Route>
       <Route path="/services">
         <Services></Services>
       </Route>
       <Route path="/register">
        <Register></Register>
       </Route>
       <Route path="/login">
    <Login></Login>
       </Route>
       <Privateroute path="/detail/:serviceid">
         <Detail></Detail>
       </Privateroute>
       <Route path="*">
         <Notfound></Notfound>

       </Route>

       
     </Switch>

     <Footer></Footer>
     </BrowserRouter>
    </Authprovider>
    </div>
  );
}

export default App;
