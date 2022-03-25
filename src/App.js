import './App.css';
import React, {PropTypes, createContext, useState} from 'react';
import LoginForm from './components/Login/loginForm';
import Navbar from './components/NavBar';
import Navb from './components/NavBar/index';
import {BrowserRouter as Router, IndexRoute, Route, Routes, Link} from 'react-router-dom';
import HomePage from './pages';
import Account from './pages/account'
import { render } from '@testing-library/react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './components/NavBar/navBarElements'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import QueueTitle from './components/title';



function App() {

  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");


    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }

    const Login = details => {
      console.log(details);
      console.log(details.name);
      if (details.email == adminUser.email && details.password == adminUser.password){
          console.log("Logged in");
          setUser({
            name: details.name,
            email: details.email,
          });
      } else {
        console.log("Incorrect credentials");
        setError("Details do not match!");
      }
    }
  
    const Logout = () => {
      setUser({name:"", email:""});
      setError("");
    }

 

  return (
    
     
    <div className="App">

      
        {(user.email != "") ? (
            <div className="home">
         
             <Router> 

             
                <Navbar nameU={user.name} />
             


                <Routes>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/account' component={<Account />} />
      
          
                </Routes>

                <div className='bottom'>
                  <h1>hi</h1>
                  <QueueTitle />

              
                </div>   
              </Router> 
              </div>

          
        ) : (
          <div className='x'>
          <LoginForm Login={Login} error={error}/>
          </div>
        )}
    
    </div>
  );

};

export default App;




{/*             
               <div className="bottom">

              </div>  */}
/* <Switch> */
      /* <Routes>
                    <Route path='/homepage' component={HomePage} />
                    <Route exact path='/account' component={Account} /> 
                    <Route render={() => <h1>Not found!</h1>} />
                    
                  </Routes>

              </Switch>
               */

 /* <Route exact path='/account' component={Account} /> */

  // {/* <h2>Welcome <span>{user.name}</span></h2> */}
  // {/* <button onClick={Logout}>Logout</button> */}
  // {/* <header className="App-header">
  //       <img src={handLogo} alt="handLogo" />
  //         Welcome
  //     </header> 


  // <Route path='/logout' component={Logout} />

{/* <div className="home">
          <Router>
            <Navbar />
              <Routes>
                <Route path='/' exact component={Account} />
                <Route path='/' exact component={Help} />
              </Routes>
          </Router>
          </div> */}