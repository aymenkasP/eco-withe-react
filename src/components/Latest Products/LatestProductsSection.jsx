import React from 'react'
import styled from 'styled-components'
import ProductsList from './ProductsList'

export default function LatestProductsSection() {
    return (
        <LatestProductsSectionContainer>
            <Title >
            Latest Products
            </Title>
            <ProductsList />
        </LatestProductsSectionContainer>
    )
}


const LatestProductsSectionContainer = styled.section`
    width: 80%;
    height: 32rem;
  margin: auto;
  padding: 2rem 2rem ;

`

const Title = styled.h2`


`


