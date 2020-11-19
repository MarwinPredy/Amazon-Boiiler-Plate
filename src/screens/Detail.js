import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../component/Header'
import SearchBar from '../component/SearchBar'
import BottomNav from '../component/BottomNav'
import AdressBar from '../component/AdressBar'
import img1 from '../data/img/81jfo0rafsL._AC_UL320_.jpg'

const Detail = props => {

  const[detail, setDetail] = useState({})

  useEffect(()=>{

    axios.get(`http://localhost:3004/articles/${props.match.params.id}`)
    .then(res => {
      setDetail(res.data);
    })
    .catch(err => {
        console.log(err);
    });
  }, [])

  const handleShop = (product) =>{
    const currentShop = localStorage.getItem('shop') ? JSON.parse(localStorage.getItem('shop')) : []
    const isPresent = currentShop.map(e =>e.id).indexOf(product.id)
    if(isPresent===-1){
      currentShop.push(product)
    }else{
      const filteredProduct = currentShop.filter(item => item.id !== product.id)
    }
    localStorage.setItem('shop', JSON.stringify(currentShop))
  }

  return (
  <Wrapper>
    <BigBar>
      <Header/>
      <SearchBar/>
      <BottomNav/>
      <AdressBar/>
      <TitleProduct>Details :</TitleProduct>
    </BigBar>
      <Card>
        <Img src={img1}></Img>
        <h3>{detail.title}</h3>
        <div>
          <p>Prix: {detail.price}</p>
        </div>
        {detail.color && <div>
          <p>Couleur: {detail.color}</p>
        </div>}
        {detail.brand && <div>
          <p>Marque: {detail.brand}</p>
        </div>}
        {detail.weight &&<div>
          <p>Poids: {detail.weight}</p>
        </div>}
        {detail.raw &&<div>
          <p>Matière: {detail.raw}</p>
        </div>}
        {detail.type &&<div>
          <p>Type: {detail.type}</p>
        </div>}
        {detail.connector &&<div>
          <p>Connecteur: {detail.connector}</p>
        </div>}
        {detail.tension &&<div>
          <p>Alimentation: {detail.tension}</p>
        </div>}
        <StyledButton onClick={()=> handleShop({id: props.match.params.id, title: detail.title, price: detail.price })}>Ajouter au panier</StyledButton>
      </Card>
  </Wrapper>
  )
}; 

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;
const BigBar = styled.div`
display: flex;
position: fixed;
flex-direction: column;
align-items: center;
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
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
bottom: 5%;
position: absolute;
width:100%;
`;

const Img = styled.img`
width: 50%;
`;

const StyledButton= styled.button`
color: #000;
font-family: 'Arimo';
font-size: 15px;
text-decoration: none;
background-color: #f0c14b;
border: none;
width: 70%;
height: 45px;
`;


export default Detail;