import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import styled from 'styled-components';
import NavIcon from './NavIcon';

export default function NavLinks() {
    return (
        <>
                <List>

                        <ListItem >
                            HOME
                        </ListItem>
                        <ListItem >
                             SHOP
                        </ListItem>
                        <ListItem >
                          BLOG
                        </ListItem>
                        <ListItem >
                             PAGES
                        </ListItem>
                        <ListItem >
                            CONTACT
                        </ListItem>
                        <ListItem >
                        <NavIcon icon={<AiOutlineShoppingCart />} />
                        </ListItem>
                        <ListItem >
                        <NavIcon icon={<BiSearchAlt />} />
                        </ListItem>

                </List>
        </>
    )
}

const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-grow: 0.5;

`;
const ListItem = styled.li`
display: flex;
align-items: center;
`;


