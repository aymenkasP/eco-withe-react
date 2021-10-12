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
    margin-top: 223rem;
   width: 80%;
   height: 80vh;
  margin: auto;
  background-color: red;
`;