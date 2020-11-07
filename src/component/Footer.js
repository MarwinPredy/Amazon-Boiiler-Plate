import React from 'react';
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
        <Container>
            <List>
                <Puce>Conditions générales de vente</Puce>
                <Puce>Conditions de participation au programme Marketplace</Puce>
                <Puce>Vos informations personnelles</Puce>
                <Puce>Cookies</Puce>
                <Puce>Annonces basées sur vos centres d’intérêt</Puce>
                <Puce>© 1996-2020 Amazon.com, Inc.</Puce>
            </List>
        </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #0D141E;
  height: auto; 
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const Container = styled.div`
  padding: 20px 30px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column; 
  width: 100%;
  list-style: none;
  padding: 0;
`;

const Puce = styled.li`
  font-size: 11px;
  color: #fff;
  cursor: pointer;
`;

export default Footer;