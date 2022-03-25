import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navBarElements'; 
import {BrowserRouter as Switch, IndexRoute, Routes, Route} from 'react-router-dom';


const Navbar = ({history,isLogged, nameU}) => {
    
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }

   

    return (
        <>
            <Nav>
    
                <h2 className="welcome-1">Welcome, {nameU} </h2>
   
                <div className="image-navbar">
                        <img src={require('../../hand.png')} height={50} width={50} align={'center'} alt="handLogo" />
                </div>


                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home Page
                    </NavLink>

                    <NavLink to="/account" activeStyle>
                        Account
                    </NavLink>
                
                    <NavLink to="/logout" activeStyle onClick={handleClick}>
                        Logout
                    </NavLink>
                </NavMenu>
        
            </Nav>
        </>
    )
}

export default Navbar

Navbar.defaultProps = {
    nameU: 'noName'
}

 
