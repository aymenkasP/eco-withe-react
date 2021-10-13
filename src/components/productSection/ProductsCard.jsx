import React from 'react'
import styled from 'styled-components'

export default function ProductsCard({productImage,productTitle,productDescription,price}) {
    return (
        <>
                <ProductsCardBody >
                        <ImageContainer >
                            <SmallImage >
                                <ProductImage >
                                    {productImage}
                                </ProductImage>
                            </SmallImage>
                            <BigImage >
                                <BigProductImage >
                                   {productImage}
                                </BigProductImage>
                            </BigImage>    
                        </ImageContainer>
                        <Content >
                            <ProductTitle >
                                {productTitle}
                            </ProductTitle>
                            <Stars >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            </Stars>  

                            <ProductDescription >
                                {productDescription}
                            </ProductDescription>
                            <Price >
                                {price}
                            </Price>
                            <Button >
                            add to cart
                            </Button>
                        </Content>
                </ProductsCardBody>
        </>
    )
}


    
const  ProductsCardBody = styled.div`
    display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  border:.1rem solid rgba(0,0,0,.1);
  border-radius: .5rem;
  background:#f9f9f9;
  padding:2rem;
  align-items: center;
  margin:1.5rem 0;

`
const  ImageContainer = styled.div`
     display:flex;
    gap:1.5rem;
    align-items: center;
    flex:1 1 50rem;
`
const  SmallImage = styled.div`
      width:20%;
    img {
        width:100%;
        padding:1rem;
        border:.1rem solid rgba(0,0,0,.3);
        cursor: pointer;

        &:hover {
            background:#ccc;
        }
    }
`
const  ProductImage = styled.div`
     
`
const  BigImage = styled.div`
     width:80%;
  padding:1rem;
  img {
    width:100%;

    &:hover {
        transform: scale(1.05);
    }
  }
`
const  BigProductImage = styled.div`
    
`
const  Content = styled.div`
    
`
const  ProductTitle = styled.h3`
    font-size: 2.5rem;
  color:var(--black);
`
const  Stars = styled.h3`
    font-size: 1.7rem;
  color:var(--orange);
  padding:.5rem 0;
`
const  ProductDescription = styled.p`
    font-size: 1.5rem;
  color:#666;
  padding:1rem 0;
`
const  Price = styled.div`
     font-size: 2.5rem;
  color:var(--black);
  font-weight: bolder;
`
const  Button = styled.button`
     display: inline-block;
  margin-top: 1rem;
  border-radius: .5rem;
  border:.2rem solid var(--black);
  font-weight: bolder;
  font-size: 1.7rem;
  color:var(--black);
  cursor: pointer;
  background:#fff;
  padding:.8rem 3rem;
`

