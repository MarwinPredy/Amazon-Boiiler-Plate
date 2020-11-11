import React, {useEffect, useState} from 'react';
import{Link} from 'react-router-dom'
import styled from 'styled-components';
import img1 from '../data/img/81jfo0rafsL._AC_UL320_.jpg'
const axios = require('axios');



const Products = () => {

  const[productList, setProductList] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:3004/articles')
    .then(res => {
      setProductList(res.data)
    })
    .catch(err => {
        console.log(err);
    });
  }, [])

  return (
  <CardWrapper>
    {productList.map(product => 
      <Card>
        <Row>
          <ImgWrapper>
            <Img src={img1}></Img>
          </ImgWrapper>
          <InfoWrapper>
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
          </InfoWrapper>
        </Row>
        <div key={product.id}>
          <Link to={`/detail/${product.id}`}>Voir produit</Link>
        </div>
      </Card>
    )}
  </CardWrapper>  
  )
}; 

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Card = styled.div`
border: 1px solid #e6e6e6;
width: 300px;
height: 335px;
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

const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
width: 50%;
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
`;


export default Products;