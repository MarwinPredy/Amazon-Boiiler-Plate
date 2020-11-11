import React from 'react';
import styled from 'styled-components'

const SearchBar = (props) => {
  return (
    <SrchBar type={props.type} disabled={props.disabled}>Login</SrchBar>
  );
};

const SrchBar = styled.input`
  height: 45px;
  width: 405px;
  border: none;
  font-family: 'Arimo';
  font-size: 15px;
`;

export default SearchBar;