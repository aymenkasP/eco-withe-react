import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const Swiperslide = () => {
    return (
        <SwiperslideContainer>
            <Slide />
        </SwiperslideContainer>
    );
}

export default Swiperslide;

const SwiperslideContainer = styled.section`
   width: 80%;
   padding: 1rem;
   height: 80vh;
  margin: auto;
`;