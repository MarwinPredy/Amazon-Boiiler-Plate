import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const AdressBar = (props) => {
  return (
    <Wrapper>
        <StyledFontAwesomeIcon icon="map-marker" />
        <AdrsBar type={props.type} disabled={props.disabled} placeholder="Entrez votre adresse" ></AdrsBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 44px;
  width: 100%;
  background-color: #37475A;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AdrsBar = styled.input`
  height: 40px;
  width: 250px;
  background: transparent; 
  border: none;
  font-family: 'Arimo';
  font-size: 15px;
  padding: 10px;
  color: #fff;
  &::placeholder{
      color: #fff;
      font-size: 15px;
  }
  &::focus{
    outline-color: none;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: #fff;
`;

export default AdressBar;