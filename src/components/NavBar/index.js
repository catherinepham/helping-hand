import userEvent from '@testing-library/user-event';
import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navBarElements';


const Navbar = () => {
  return (
    <>
        <Nav>
            <NavBtn>
                <h1> Welcome</h1> 
            </NavBtn>
            <NavBtn>
                <img src={require('../../hand.png')} height={50} width={50}  alt="handLogo" />
            </NavBtn>
            <Bars />
            <NavMenu>
                <NavLink to="/account" activeStyle>
                    Account
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contact Us
                </NavLink>
               
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/logout'>Logout</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar


 /* <NavLink to="/logout" activeStyle>
                    Logout
                </NavLink> */
/* <NavBtn>
                <NavBtnLink to='logout'>Logout</NavBtnLink>
            </NavBtn> */
