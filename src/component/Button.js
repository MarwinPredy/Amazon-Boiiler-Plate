import React from 'react';
import styled from 'styled-components'

const Button = (props) => {
  return (
    <Btn type={props.type} disabled={props.disabled}>Login</Btn>
  );
};

const Btn = styled.button`
  background-color: #f0c14b;
  height: 45px;
  width: 360px;
  color: #000;
  border: none;
  font-family: 'Arimo';
  font-size: 15px;
`;

export default Button;