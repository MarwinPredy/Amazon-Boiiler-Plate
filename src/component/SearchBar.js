import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const SearchBar = (props) => {
  return (
    <Wrapper>
      <SrchBar type={props.type} disabled={props.disabled} placeholder="Rechercher Amazon.fr"></SrchBar>
      <Btn>
        <StyledFontAwesomeIcon icon="search" />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #232f3e;
  display: flex; 
  flex-direction: row;
  justify-content: center; 
  align-items: center;
`;

const SrchBar = styled.input`
  height: 45px;
  width: 250px;
  border: none;
  font-family: 'Arimo';
  font-size: 15px;
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  padding-left: 10px;
`;

const Btn = styled.div`
background-color: #faa41a;
height: 47px;
width: 45px;
display: flex; 
justify-content: center;
align-items: center;
border-bottom-right-radius: 0.3rem;
border-top-right-radius: 0.3rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: #000;
`;

export default SearchBar;