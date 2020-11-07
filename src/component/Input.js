import React from 'react';
import styled from 'styled-components'

const Input = (props) => {
  return (
    <Inpt type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}></Inpt>
  );
};

const Inpt= styled.input`
  height: 45px;
  width: 350px;
  margin: 10px 0;
  border: .1rem #ddd solid;
  padding: 0 0 0 10px;

  ::placeholder,
  ::-webkit-input-placeholder {
    padding: 0 0 10px 0;
  }
  :-ms-input-placeholder {
    padding: 0 0 10px 0;
  }

`;

export default Input;