import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.header`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
	font-size: 65px;`
const Div = styled.div`
	width: 100%;
  height: 100vh;
	background-color: #064a2ce9;	
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;`
const Cont = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.35);
  background-color: #0a613ce9;
  width: 75vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;`
const Button = styled.div`
  display: flex;
  justify-content: space-around;
  width: 55%;`
const Button1 = styled.button`
  border-radius: 1px;
  background-color: #17ab6be9;
  padding: 10px 20px;
  border: 1px solid black;
  cursor: pointer;`
const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;`

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
      <Cont>
				<Title>golf locker</Title>
				<Input>
          <label>username</label>
          <input 
            type="text" 
            placeholder="username" 
            onChange={(e) => setUser({ ...user, username: e.target.value })} />
        </Input>
				<Input>
          <label>password</label>
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