import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to={"/"} id="logo">
          Athlead
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={"/"}>1. About Us</Link>
        </li>
        <li>
          <Link to={"/work"}>2. Our Work</Link>
        </li>
        <li>
          <Link to={"/contact"}>3. Contact us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

//STYLED COMPONENTS
const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  min-height: 10vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 2rem 10rem;
  background-color: #282828;
  h1 {
    flex: 1;
  }
  ul {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
  #logo {
    font-family: lobster, cursive;
    font-weight: lighter;
    font-size: 2rem;
    color: white;
  }
  li {
    position: relative;
  }
`;
export default Nav;
