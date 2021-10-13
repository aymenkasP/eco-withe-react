import React from 'react'
import styled from 'styled-components'
import ProductsCard from './ProductsCard'
import image from './product.png'

export default function ProductsSection() {
    return (
        <>
            <ProductsSectionContainer>
                 <h2>Products</h2>
                <CardSectionContainer >
                    <ProductsCard 
                    productImage={image}
                     productTitle="addidas dooz 123s"
                     productDescription="lorem ipsum dolor sit amet"
                      price="123"
                      />
                    <ProductsCard 
                    productImage={image}
                     productTitle="addidas dooz 123s"
                     productDescription="lorem ipsum dolor sit amet"
                      price="123"
                      />
                    <ProductsCard 
                    productImage={image}
                     productTitle="addidas dooz 123s"
                     productDescription="lorem ipsum dolor sit amet"
                      price="123"
                      />
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
padding : 2rem
`