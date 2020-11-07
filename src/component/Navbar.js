import React from 'react';
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Wrapper>
        <Container>
            <ImgWrapper>
                <Img className="logo" src={logo} alt="logo"></Img>
            </ImgWrapper>
            <div className=""></div>
        </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #232f3e;
  height: 48px; 
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row; 
  width: 100%;
`;

const ImgWrapper = styled.div`
  height : 48px;
`;

const Img = styled.img`
  height : 100%;
`;

export default Navbar;