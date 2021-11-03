import React, { useEffect, useState } from "react";
import axios from 'axios'
import { updateUser } from '../../redux/reducer';
import { connect } from 'react-redux'
import styled from 'styled-components';

const Title = styled.header`
	display: flex;
  font-family: 'Montserrat', sans-serif;
	font-size: 65px;
	margin-bottom: 45px;`

const Div = styled.div`
	width: 100%;
  height: 100vh;
	background-color: #064a2ce9;	
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Button1 = styled.button`
  background-color: #4CAF50; /* Green */
  border: 3px solid black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
`
const Button2 = styled.button`
  background-color: #4CAF50; /* Green */
  border: 3px solid black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
`

const Login = (props) => {
	const [user, setUser] = useState({
    username: '',
    password: ''
})

	useEffect(() => {
		axios.get('/api/auth/user')
    .then(res => res.data.updateUser(res.data))
		.catch(err => {
			console.log(err)
	})}, [])

	const login =()=> {
		axios.post('/api/auth/login', user)
			.then(res => {
				props.history.push('./Products/Products')
		})
			.catch(err => {
				console.log(err)
		})}

	const register =()=> {
    axios.post('/api/auth/register', user)
      .then(res => {
        props.history.push('./Products/Products')
      })
      .catch(err => {
        console.log(err)
      })}
			
		return (
			<Div>
				<Title className="title">golf locker</Title>
				<div>
          <label>username</label>
          <input type="text" placeholder="username" onChange={(e) => setUser({ username: e.target.value })} />
					<Button1 onClick={login}type='submit'>log in</Button1>
        </div>
				
				<div>
          <label>password</label>
          <input type="text" placeholder="password" onChange={(e) => setUser({ password: e.target.value })} />
					<Button2 onClick={register}> register </Button2>
        </div>
			</Div>
		)
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { updateUser })(Login)