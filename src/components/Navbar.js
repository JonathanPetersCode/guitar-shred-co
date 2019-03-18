import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/guitarShredCoLogo1.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
    <NavWrapper className= "navbar navbar-expand{-sm|-md|-lg|-xl}  navbar-dark">
        <Link to="/" className="navbar-brand">
            <img src={logo} alt="store" className="navbar-brand"/>
        </Link>
        <Link to="/cart">
            <ButtonContainer className="navbar-icon-wrapper">
                <span>
                    <i className="fas fa-shopping-bag fa-2x navbar-icon" />
                </span>
                <div className="align-middle"><h1 className="my-bag-text">My Bag</h1></div>
            </ButtonContainer>
        </Link>
    </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
    }
.navbar-icon{
    color: var(--mainYellow);
}
.navbar-icon-wrapper{
    margin-top: .5rem;
    padding: .5rem !important;
    border-radius: 0 !important;
    border: solid 3px var(--mainYellow);
}
.my-bag-text{
    font-family: 'Droid Sans',
    sans-serif;
    font-size: 1rem;
}
`;



