import React, {
    useState,
    useEffect
  } from 'react';
import styled from 'styled-components'

const Counter = () => {

    const [counter, setCounter] = useState("0");
    function HandleCounter(){
        const Getlocal = localStorage.getItem();
        if (Getlocal != 0){
            setCounter ++; 
        }
    }

  return (
    <div className="Counter">
        <span onChange={e => HandleCounter(e)} >{counter}</span>
    </div>
  );
};


export default Counter;