import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
      <Card>
        <h3>{detail.title}</h3>
        <div>
          <p>Prix: {detail.price}</p>
        </div>
        <div>
          <p>Couleur: {detail.color}</p>
        </div>
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
        <button onClick={()=> handleShop({id: props.match.params.id, title: detail.title, price: detail.price })}>Ajouter au panier</button>
      </Card>
  </Wrapper>
  )
}; 

const Wrapper = styled.div`
display: flex;
position: fixed;
flex-direction: column;
align-items: center;
width: 100%;
`;
const Card = styled.div`
display: flex;
position: fixed;
flex-direction: column;
align-items: center;
width: 100%;
`;


export default Detail;