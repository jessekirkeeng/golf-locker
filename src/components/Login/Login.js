import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import './Login.css';

const Title = styled.header`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
	font-size: 45px;
  margin-bottom: 10vh;`
const Div = styled.div`
	width: 100%;
  height: 100vh;
	background-color: #064a2ce9;	
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;`
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;`
const Button = styled.div`
  display: flex;
  padding: 20px;`
const Button1 = styled.button`
  border-radius: 1px;
  background-color: #17ab6be9;
  padding: 10px 20px;
  border: 1px solid black;
  cursor: pointer;
  margin: 10px`
const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  padding: 10px`

const Login = (props) => {
	const [user, setUser] = useState({
    username: '',
    password: ''
})

  const login =()=> {
    axios.post('/api/auth/login', user)
    .then(res => props.history.push('./products'))
    .catch(err => console.log(err)
)}

	const register =()=> {
    axios.post('/api/auth/register', user)
    .then(res => props.history.push('./products'))
    .catch(err => console.log(err)
)}
			
	return (
		<Div>
      <Cont className='container'>
				<Title className='title'>golf locker</Title>
				<Input className='input'>
          <label>username </label>
          <input 
            type="text" 
            placeholder="username" 
            onChange={(e) => setUser({ ...user, username: e.target.value })} />
        </Input>
				<Input className='input'>
          <label>password </label>
          <input 
            type="password" 
            placeholder="password" 
            onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </Input>
        <Button>
          <Button1 onClick={login}type='submit'>log in</Button1>
          <Button1 onClick={register}> register </Button1>
        </Button>
      </Cont>
		</Div>
	)
}

export default Login