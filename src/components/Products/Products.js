import React, { useEffect, useState } from "react";
import axios from 'axios';
import { logout, addItem } from '../../redux/reducer';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './Product.css'

const Driver = styled.div`
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
const ProductMap = styled.div`
	padding-top: 50px;`
const Button = styled.button`
	cursor: pointer;
	box-shadow: 0 0 20px rgba(0, 0, 0, .5);
	padding: 2px 5px 2px 5px;
	background-color: #9edcc1e9;
	font-family:'Montserrat', sans-serif;`
const Btnmap =styled.div`
	cursor: pointer;
	box-shadow: 0 0 20px rgba(0, 0, 0, .5);
	padding: 2px 5px 2px 5px;
	background-color: #9edcc1e9;
	font-family:'Montserrat', sans-serif;`
const Img = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 30%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	background-color: rgb(255, 255, 255);
	margin-left: 25px;
	margin-right: 25px;
	margin-bottom: 10px;`
const Items = styled.div`
	border: 2px solid black;
	text-align: center;
	margin: 10px;`

const Products = (props) => {
	const [bag, setBag] = useState([])
	const [products, setProducts] = useState([])

	useEffect((props) => {
		axios.get('/api/products')
			.then(res => setProducts( res.data ))
				.catch(err => {console.log(err)
})}, [])

const logout = () => {
	axios.post('/api/auth/logout')
		.then(res => props.history.push('./'))
			.catch(err => console.log(err));
}

const addToBag = (description, image_url) => {
	axios.post('/api/bags', {description, image_url})
    .then(res => setBag( res.data ))
      .catch(err => console.log(err))
	}
	console.log(props.addItem())

	return (
		<Driver>
			<Links className='linked'>			
				<Link to='/bag'><Button className='button'>my bag</Button></Link>
				<Link to='/'><Button className='button' onClick={logout}>logout</Button></Link>
				<Link to='/nodeMailer'><Button className='button'>contact us</Button></Link>
			</Links>
			<ProductMap className='map'>
				{products.map(product => {
					return (
						<Items key={product.product_id}>
							<h2 >
							{product.description}
							</h2>
							<Img src={product.image_url} alt={product.description}/>
							<Btnmap className='button' onClick={()=>addToBag(product.image_url, product.description)}>+</Btnmap>
						</Items>
				)
			})}
			</ProductMap>
		</Driver>
	)
}


const mapStateToProps = state => state

export default connect(mapStateToProps, { logout, addItem })(Products)