import React, { useEffect, useState } from "react";
import axios from 'axios';
import { logout } from '../../redux/reducer';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './Bag.css';

const Head = styled.div`
	background-color: #0a613ce9;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;`
const Links = styled.header`
	position: fixed;
	height: 50px;
	width: 100%;
	background-color: #095434e9;
	display: flex;
	justify-content: center;
	justify-content: space-around;
	align-items: center;`
const Items = styled.div`
	border: 2px solid black;
	text-align: center;
	margin: 10px;`
const Btn = styled.button`
	cursor: pointer;
	box-shadow: 0 0 20px rgba(0, 0, 0, .5);
	padding: 2px 5px 2px 5px;
	background-color: #9edcc1e9;
	font-family:'Montserrat', sans-serif;`
const Btnmap = styled.button`
	margin: 13px;
	padding: 5px;
	padding-left: 25px;
	padding-right: 25px;
	cursor: pointer;
	background-color: #9edcc1e9;`
const Img = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 30%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	background-color: rgb(255, 255, 255);
	margin-left: 25px;
	margin-right: 25px;`
const Map = styled.div`
	padding-top: 50px;`

const Bag = (props) => {
	const [bag, setBag] = useState([])
	const [custom, setCustom] = useState([])

	useEffect((props) => {
		axios.get('/api/bag')
			.then(res => setBag(res.data))
			.catch(err => console.log(err)
			)
	}, [])

	const logout = () => {
		axios.post('/api/auth/logout')
			.then(res => props.history.push('./'))
			.catch(err => console.log(err));
	}

	const deleteProduct = (id) => {
		axios.delete(`/api/products/${id}`)
			.then(res => setBag(res.data))
			.catch(err => console.log(err)
			)
	}

	const addToCustom = (description, image_url) => {
		axios.post('/api/customClub', { description, image_url })
			.then(res => setCustom(res.data))
			.catch(err => console.log(err))
	}

	return (
		<Head className="head">
			<Links className='links'>
				<Link to='/products'> <Btn className='btn'>drivers</Btn></Link>
				<Link to='/custom'><Btn className='btn'>custom</Btn></Link>
				<Link to='/nodeMailer'> <Btn className='btn'>contact us</Btn></Link>
				<Link to='/'><Btn className='btn' onClick={logout}>logout</Btn></Link>
			</Links>
			<Map className='map'>
				{bag.map(product => {
					return (
						<Items className='items' key={product.product_id}>
							<h2>{product.image_url}</h2>
							<Img className='img' src={product.description} alt={product.description} />
							<section>							<Btnmap className='btn-' onClick={() => deleteProduct(product.product_id)}>-</Btnmap>
								<Btnmap className='btn' onClick={() => addToCustom(product.description, product.image_url)}>+</Btnmap>
							</section>
						</Items>
					)
				})}
			</Map>
		</Head>
	)
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logout })(Bag)