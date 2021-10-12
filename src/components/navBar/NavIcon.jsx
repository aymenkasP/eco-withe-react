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

    background-color: red;


`



