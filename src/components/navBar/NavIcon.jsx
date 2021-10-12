import React from 'react'
import styled from 'styled-components'


export default function NavIcon({icon}) {
    return (
        <>
                <Icon>
                    {icon}
                </Icon>
        </>
    )
}

const Icon = styled.div`
    display: grid;
    place-items: center;
    font-size: 1.6rem;
    margin-right: auto;

`



