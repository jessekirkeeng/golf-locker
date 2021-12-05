import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { logout } from '../../redux/reducer';
import { connect } from 'react-redux';
import './Custom.css';
import Stripe from "../Stripe/Stripe";

const Item = styled.div`
	border: 2px solid black;
	text-align: center;
	margin: 10px;`
const Image = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 30%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	background-color: rgb(255, 255, 255);
	margin-left: 25px;
	margin-right: 25px;`
const Prime = styled.div`
	background-color: #0a613ce9;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;`
const Section = styled.div`
	position: fixed;
	height: 50px;
	width: 100%;
	background-color: #095434e9;
	display: flex;
	justify-content: center;
	justify-content: space-around;
	align-items: center;`
const Btn = styled.button`
	cursor: pointer;
	box-shadow: 0 0 20px rgba(0, 0, 0, .5);
	padding: 2px 5px 2px 5px;
	background-color: #9edcc1e9;
	font-family:'Montserrat', sans-serif;`
const Maps =styled.div`
	padding-top: 50px;`

const Custom = (props) => {
	const [smash, setSmash] = useState([{
		loft: 10,
		shaft: 2,
		smash: 5
	}])
	const [custom, setCustom] = useState([])
	const [input, setInput] = useState('')

	useEffect((props) => {
		axios.get(`/api/customs`)
			.then(res => setCustom(res.data))
			.catch(err => console.log(err)
			)
	}, [])

	const deleteProduct = (id) => {
		axios.delete(`/api/customDelete/${id}`)
			.then(res => setCustom(res.data))
			.catch(err => console.log(err)
			)
	}

	const changeSetting = (id) => {
		axios.put(`/api/custom/setting/${id}`, { input })
			.then(res => setCustom(res.data))
			.catch(err => console.log(err))
	}

	return (
		<Prime>
			<Section className='head'>
				<Link to='/products'> <Btn className='btn1'>drivers</Btn></Link>
				<Link to='/bag'><Btn className='btn1'>my bag</Btn></Link>
				<Link to='/nodeMailer'> <Btn className='btn1'>contact us</Btn></Link>
				<Link to='/'><Btn className='btn1' onClick={logout}>logout</Btn></Link>
				<Stripe to='/stripe'><Btn className='btn1'>checkout</Btn></Stripe>
			</Section>
			<Maps className='maps'>
			{custom.map((product, i) => {
				return (
					<Item key={i}>
						<input onChange={e => setInput(e.target.value)} />
						<Btn onClick={e => changeSetting(product.product_id)}>set custom name</Btn>
						<h2>{product.image_url}</h2>
						<Image className='img' src={product.description} alt={product.description} />
						<section >
						<Btn className='bottom' onClick={() => deleteProduct(product.custom_id)}>-</Btn>
						</section>
					</Item>
				)
			})}
			</Maps>
		</Prime>
	)
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logout })(Custom)