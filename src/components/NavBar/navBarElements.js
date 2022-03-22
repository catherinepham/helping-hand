import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav`
    background: #cf82df;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

export const NavLink = styled(Link)`
    color: #7c0686;
    margin: 20px;
    display: flex;
    align-items: center:
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &.active {
        color: #ebddf7;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0; 
        right: 0; 
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        display: none;
        text-decoration: none;
    }
`;

// Logout button
export const NavBtnLink = styled(Link)`
    border-radius: 8px;
    display: inline-block;
    background: linear-gradient(
    to right,
        #d19ddb,
        #cf82df,
        #7c0686
    );
    padding: 10px 22px;
    background-size: 200%;
    background-position: 0%;
    color: #fff;
    outline: none;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: linear-gradient(
            to right,
                #d19ddb,
                #cf82df,
                #7c0686
            );
        color: #8c69ad;
    }
`;



