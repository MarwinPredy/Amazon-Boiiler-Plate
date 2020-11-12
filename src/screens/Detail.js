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
    const currentShop = sessionStorage.getItem('shop') ? JSON.parse(sessionStorage.getItem('shop')) : []
    currentShop.push(product)
    sessionStorage.setItem('shop', JSON.stringify(currentShop))
  }

  return (
  <div>
      <p>{detail.title}</p>
      <p>{detail.price}</p>
      <p>{detail.color}</p>
      <p>{detail.brand}</p>
      <p>{detail.weight}</p>
      <p>{detail.raw}</p>
      <p>{detail.type}</p>
      <p>{detail.connector}</p>
      <p>{detail.tension}</p>
      <button onClick={()=> handleShop({id: props.match.params.id, title: detail.title, price: detail.price })}></button>

  </div>
  )
}; 

export default Detail;