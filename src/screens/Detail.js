import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Detail = props => {

  const[detail, setDetail] = useState({})

  useEffect(()=>{

    axios.get(`http://localhost:3004/articles/${props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      setDetail(res.data);
    })
    .catch(err => {
        console.log(err);
    });
  }, [])

  return (
  <div>
      <p>{detail.title}</p>
      <p>{detail.price}</p>
      <p>{detail.color}</p>
      <p>{detail.brand}</p>
      <p>{detail.weight}</p>
      <p>{detail.raw}</p>
      <button></button>

  </div>
  )
}; 

export default Detail;