import React from 'react'
import styled from 'styled-components';

export default function FeaturesCards({icon , title, subtitle,}) {
    return (
        <FeaturesCardsContainer>
            <Icon >
                {icon}
            </Icon>
                <Title >
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
            {/* 
            icon 
            title
            subtitle
             */}
        </FeaturesCardsContainer>
    )
}


const FeaturesCardsContainer = styled.div`
   margin: 0.5rem;
`;


const Title = styled.h3`
font-weight: 500;
margin: 0;

`
const Subtitle = styled.h5`
font-weight: 300;
margin: 0;
text-align: center;
border-right: 1px solid #eeeeee;
`
const Icon = styled.div`
font-size: 2rem;

`