
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Shared/Header';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
         
       </Route>
       <Route path="/home">

       </Route>
       <Route path="/register">
        <Register></Register>
       </Route>
       <Route path="/login">
    <Login></Login>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
