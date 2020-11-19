import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../component/Header'
import SearchBar from '../component/SearchBar'
import BottomNav from '../component/BottomNav'
import AdressBar from '../component/AdressBar'
import img1 from '../data/img/81jfo0rafsL._AC_UL320_.jpg'
import img2 from '../assets/prime.png'

const GetlocalStorage = ()=>{
  let result = []
  try{result = JSON.parse(localStorage.getItem('shop')) || []}
  catch{result = []}
  return result
}
const Panier = () => {

  const[article, setArticle] = useState(GetlocalStorage)

  return (
  <div>
    <BigBar>
      <Header/>
      <SearchBar/>
      <BottomNav/>
      <AdressBar/>
      <TitleProduct>Panier :</TitleProduct>
    </BigBar>
    <CardWrapper>
    {article.length >0 ? article.map(product => 
      <Card key={product.id}>
        <Row>
          <ImgWrapper>
            <Img src={img1}></Img>
          </ImgWrapper>
          <InfoWrapper>
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
            <PrimeContainer>
              <Img2 src={img2}></Img2>
              <Texte>Recevez le</Texte>
              <Texte2>samedi 14 novembre</Texte2>
            </PrimeContainer>
            <Texte3>Livraison GRATUITE par Amazon</Texte3>
          </InfoWrapper>
        </Row>
      </Card>
    ) : <span>Votre panier est vide</span>}
  </CardWrapper>  
  </div>
  
  )
}; 

const BigBar = styled.div`
display: flex;
position: fixed;
flex-direction: column;
align-items: center;
width: 100%;
`;

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 260px;
`;

const Card = styled.div`
border: 1px solid #e6e6e6;
width: 300px;
height: 215px;
margin: 10px 0;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
height: 80%;
`;

const ImgWrapper = styled.div`
width: 50%;
align-self: center;
`;

const Img = styled.img`
width: 100%;
`;

const TitleProduct = styled.h2`
width : 100%;
padding-left: 25px;
text-align: left;
font-weight: 300;
margin: 0;
background-color: #fff;
height: 50px;
display: flex;
align-items: center;
`;

const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding-top: 5px;
`;

const Title = styled.h3`
font-size: 14px;
font-weight: 300;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const Price = styled.span`
font-size: 14px;
font-weight: 300;
text-align: left;
`;

const PrimeContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
flex-wrap: wrap;
margin: 20px 0 0 0;
`;

const Img2 = styled.img`
height: 20px;
`;

const Texte = styled.p`
font-size: 10px;
margin: 0;
color: #555;
`;

const Texte2 = styled.span`
font-size: 13px;
font-weight: 600;
margin: 0;
color: #555;
`;

const Texte3 = styled.p`
font-size: 12px;
margin: 0;
color: #555;
text-align: left;
`;

export default Panier;