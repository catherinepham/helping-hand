import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/Login/loginForm';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Account from './pages/account';
import Help from './pages/help';

function App() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }
    const [user, setUser] = useState({name:"",email:""});
    const [error, setError] = useState("");
  
    const Login = details => {
      console.log(details);
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
                <Navbar />
                <Routes>
                    <Route path='/' exact component={Account} />
                    <Route path='/' exact component={Help} />
                  </Routes>
              </Router>
            </div> 
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
    
    </div>
  );

}

export default App;

  // {/* <h2>Welcome <span>{user.name}</span></h2> */}
  // {/* <button onClick={Logout}>Logout</button> */}
  // {/* <header className="App-header">
  //       <img src={handLogo} alt="handLogo" />
  //         Welcome
  //     </header> 



{/* <div className="home">
          <Router>
            <Navbar />
              <Routes>
                <Route path='/' exact component={Account} />
                <Route path='/' exact component={Help} />
              </Routes>
          </Router>
          </div> */}