import React from 'react';
import styled from 'styled-components';

const BottomNav = ()=> {

  return (
    <Wrapper>
        <Liste>
            <Puce>Prime</Puce>
            <Puce>Musique</Puce>
            <Puce>Meilleures Ventes</Puce>
        </Liste>
  </Wrapper>
  )
}; 

const Wrapper = styled.div`
  height: 35px;
  width: 100%;
  background-color: #232f3e;
  display: flex; 
  flex-direction: row;
  justify-content: center; 
  align-items: flex-end;
`;

const Liste = styled.ul`
  display: flex; 
  flex-direction: row;
  justify-content: space-evenly; 
  padding: 0;
  align-items: center;
  list-style: none;
  width: 100%;
`;

const Puce = styled.li`
  color: #fff;
  font-family: 'Arimo';
  font-weight: 300;
  cursor: pointer;
`;

export default BottomNav;