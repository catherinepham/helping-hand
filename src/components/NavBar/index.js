import userEvent from '@testing-library/user-event';
import React from 'react';
import app from '../../App';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navBarElements'; 

const Navbar = ({history,isLogged}) => {
    
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }

    return (
        <>
            <Nav>
                <h2 className="welcome-1">Welcome,</h2>
            
                <div className="image-navbar">
                        <img src={require('../../hand.png')} height={50} width={50} align={'center'} alt="handLogo" />
                </div>
                <Bars />
                
                <NavMenu>
                    <NavLink to="/homepage">
                        Home Page
                    </NavLink>

                    <NavLink to="/account">
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


 
