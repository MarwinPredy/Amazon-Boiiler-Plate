import React from 'react';
import Counter from '../component/Counter'
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Header = () => {

  return (
    <Wrapper>
        <Container>
            <Burger>
              <Bars></Bars>
              <Bars></Bars>
              <Bars></Bars>
            </Burger>
            <ImgWrapper>
                <Img className="logo" src={logo} alt="logo"></Img>
            </ImgWrapper>
            <LeftNav>
              <Link to="/" onClick={()=>{localStorage.clear()}}><StyledFontAwesomeIcon icon="sign-out-alt" /></Link>
              <Link to='/panier'><StyledFontAwesomeIcon icon="cart-arrow-down" /></Link>
              <Counter></Counter>
            </LeftNav>
        </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #232f3e;
  height: 48px; 
  width: 100%;
`;

const Burger = styled.div`
height: 48px;
width: 48px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const Bars = styled.span`
width: 20px;
height: 0px;
border: 1px solid #fff;
background-color: #fff;
margin: 3px 0;
  `;

const Container = styled.div`
display: flex;
flex-direction: row; 
width: 100%;
`;

const ImgWrapper = styled.div`
height : 48px;
display: flex; 
align-items: center;
`;

const Img = styled.img`
height : 80%;
`;

const LeftNav = styled.div`
width: 50%;
display: flex; 
flex-direction: row; 
align-items: center;
justify-content: flex-end;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: #fff;
margin: 0 5px;
`;


export default Header;