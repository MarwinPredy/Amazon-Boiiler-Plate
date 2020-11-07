import React, {
    useState,
    useEffect
  } from 'react';
  import Navbar from '../component/Navbar'
  import Footer from '../component/Footer'
  import Button from '../component/Button'
  import Input from '../component/Input'
  import styled from 'styled-components'
  const axios = require('axios');
  
  
  const Login = ({history}) => {
  
    useEffect(()=>{
      const token = localStorage.getItem('token')
      if(token){
        history.push('/products')
      }
    }, [])
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    function validateFormFields() {
      return username.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const UserData = {username,password}
      axios.post('https://easy-login-api.herokuapp.com/users/login', UserData).then(res => {
        localStorage.setItem("token",res.headers["x-access-token"]) 
        localStorage.setItem("username",UserData.username) 
        history.push('/products')
      }).catch(err => {
          console.log(err)
      })
    }
  
  
    return ( 
      <LoginSection>
        <Navbar/>
        <Title>Bienvenue</Title> 
        <Form onSubmit = {handleSubmit} >
        <div>
          <Input type="text" placeholder="Identifiant" texte="Nom" value={username} onChange={e => setUserName(e.target.value)}/>
        </div > 
        <div>
          <Input type="password" placeholder="Mot de passe" value={password} onChange= {e => setPassword(e.target.value)}/>
        </div> 
        <Button type="submit" disabled = {!validateFormFields()}/>
        </Form > 
        <Footer/>
      </LoginSection>
    );
  }

  const LoginSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Title = styled.h2`
  font-family: 'Arimo';
  font-weight: 300;
  margin: 0;
  padding: 15px 5px;
  text-align: left;
  font-size: 1.4rem;
  width: 94%
  `;

  const Form = styled.form`
    border: .1rem #ddd solid;
    background-color: #fff;
    width: 390px;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 25vh;
    justify-content: space-evenly;
  `;
  
  export default Login;