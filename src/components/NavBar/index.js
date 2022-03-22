import userEvent from '@testing-library/user-event';
import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navBarElements';


const Navbar = ({history,isLogged}) => {
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
  return (
    <>
        <Nav>
            <NavBtn>
                <h1> Welcome</h1> 
            </NavBtn>
            <div className="image-navbar">
                    <img src={require('../../hand.png')} height={50} width={50} align={'center'} alt="handLogo" />
            </div>
            <Bars />
            
            <NavMenu>
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


  {/* <NavBtn>
                    <img src={require('../../hand.png')} height={50} width={50} alt="handLogo" />
                </NavBtn> */}
     /* <NavBtnLink to='/logout'>Logout</NavBtnLink> */
 /* <NavLink to="/logout" activeStyle>
                    Logout
                </NavLink> */
/* <NavBtn>
                <NavBtnLink to='logout'>Logout</NavBtnLink>
            </NavBtn> */
