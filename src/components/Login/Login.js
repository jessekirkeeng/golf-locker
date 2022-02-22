import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';
import { MyContext } from "../Sample/Sample";
import { Div, Input, Button, Button1, Title, Cont } from "../Utility/Styles";

const Login = () => {
  const [user, setLocalUser] = useState({
    username: '',
    password: ''
  });
  const { setUser } = useContext(MyContext);
  let history = useNavigate();


  const login = () => {
    try {
      axios.post('/api/auth/login', user)
      .then(res => {
        setUser(res.data);
      })
      history('./products')
    }
      catch(err) {
        console.log(err);
      }
    }

  const register = () =>{
    try {
    axios.post('/api/auth/register', user)
      .then(res => {
        setUser(res.data);
      })
      history('./products')
    }
      catch(err) {
        console.log(err);
      }
    }

  return (
    <Div>
      <Cont className='container'>
        <Title className='title'>golf locker</Title>
        <Input className='input'>
          <label>username </label>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setLocalUser({
              ...user,
              username: e.target.value
            })} />
        </Input>
        <Input className='input'>
          <label>password </label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setLocalUser({
              ...user,
              password: e.target.value
            })} />
        </Input>
        <Button>
          <Button1 onClick={login} type='submit'>log in</Button1>
          <Button1 onClick={register}> register </Button1>
        </Button>
        
      </Cont>
    </Div>
  );
};

export default Login;