import './App.css';
import React, {createContext, useState} from 'react';
import LoginForm from './components/Login/loginForm';
import Navbar from './components/NavBar';
import {BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Account from './pages/account';
import Logout from './pages/logout';
import { render } from '@testing-library/react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './components/NavBar/navBarElements'; 
import 'bootstrap/dist/css/bootstrap.min.css';


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
              <div className="welcome">
                    <h2>{user.name}</h2>
              </div>
              <Switch>
                <Navbar />
                 <Routes>
                    <Route path='/account' component={Account} />
                  </Routes>
              </Switch>
              <div className="bottom">
              </div>
            </div> 
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
    
    </div>
  );

};

export default App;






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