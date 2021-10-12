import React from 'react'
import styled from 'styled-components';
import NavIcon from './NavIcon';
import NavLinks from './NavLinks';
import { AiFillAmazonSquare , AiOutlineShoppingCart } from "react-icons/ai";

export default function Nav() {
    return (
        <NavContainer>
            <NavIcon icon={<AiFillAmazonSquare />} />
            <NavLinks />
            
        </NavContainer>
    )
}


const NavContainer = styled.nav`
  display:flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
padding:1rem;
margin-top: 1.5rem;
`;