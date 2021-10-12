import React from 'react'
import styled from 'styled-components';
import FeaturesCards from './FeaturesCards';
import { GiReturnArrow, GiStorkDelivery } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';


export default function FeaturesSection() {
    return (
        <FeaturesSectionContainer>
            <Container>
                <FeaturesCards title="Free Delivery" icon={<GiStorkDelivery />} subtitle="Free Shipping on all order" />
                <FeaturesCards title="Return Policy" icon={<GiReturnArrow />} subtitle="Free Support"/>
                <FeaturesCards title="24/7 Support" icon={<MdOutlineSupportAgent />} subtitle="Free Free Shipping on all order" />
                <FeaturesCards title="Secure Payment" icon={<RiSecurePaymentLine />} subtitle="Free Free Shipping on all order" />
            </Container>
        </FeaturesSectionContainer>
    )
}


const FeaturesSectionContainer = styled.section`
   width: 80%;
   padding: 1rem;
  margin: auto;

`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    place-items: center;
    box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
    padding: 40px 0;
`


