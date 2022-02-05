import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Btn = styled.button`
cursor: pointer;
box-shadow: 0 0 20px rgba(0, 0, 0, .5);
padding: 5px 8px 5px 8px;
background-color: #9edcc1e9;
font-family:'Montserrat', sans-serif
position: fixed;`;

export const Cust = () => {
return (
  <>
    <div>
      <Link to='/custom'><Btn>custom</Btn></Link>
    </div>
  </>
);
};

export const StripeLink = () => {
  return (
    <>
      <div>
        <Link to='/stripe'><Btn>checkout</Btn></Link>
      </div>
    </>
  );
};

export const Drivers = () => {
  return (
		<>
			<div>
				<Link to='/products'><Btn>golf clubs</Btn></Link>
			</div>
		</>
	);
};

export const MyBag = () => {
  return (
		<>
			<div>
				<Link to='/bag'><Btn>my bag</Btn></Link>
			</div>
		</>
	);
};

export const NodeMail = () => {
  return (
		<>
			<div>
				<Link to='/nodeMailer'><Btn>contact us!</Btn></Link>
			</div>
		</>
	);
};

export const Logout = (props) => {

	let req = axios.post('/api/auth/logout')
		.then(res => props.history.push('./'))
		.catch(err => console.log(err));

	return (
		<>
			<div>
				<Link to='/'><Btn onClick={req}>logout</Btn></Link>
			</div>
		</>
	)};
