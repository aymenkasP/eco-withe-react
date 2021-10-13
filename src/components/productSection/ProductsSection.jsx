import React from 'react'
import styled from 'styled-components'

export default function ProductsSection() {
    return (
        <>
            <ProductsSectionContainer>
                 <h2>Products</h2>
                <CardSectionContainer >

                </CardSectionContainer>
            </ProductsSectionContainer>
        </>
    )
}


const ProductsSectionContainer = styled.section`
    width: 80%;
    height: 32rem;
  margin: auto;
  padding: 2rem 2rem ;

`

const CardSectionContainer =styled.section`
background-color: red;

`